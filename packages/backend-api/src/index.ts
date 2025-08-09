import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { processTrade, Trade, ExecutionRule } from '@risk-control/core-engine';
import { RuleType } from '@risk-control/shared-types';

// --- Supabase and App Setup ---
const app = express();
const PORT = process.env.PORT || 3001;

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase URL or Service Role Key is not defined in .env file");
}

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

// --- In-Memory Cache for Rules ---
const ruleCache = new Map<string, ExecutionRule[]>();

// --- Cache Loading and Management ---
const loadRulesIntoCache = async () => {
    console.log('[Cache] Loading rules from database...');
    
    // NOTE: The table names ('Trader', 'RuleSet', 'ExecutionRule') and the corresponding
    // select paths MUST exactly match the case-sensitive Prisma model names.
    const { data, error } = await supabase
        .from('Trader')
        .select(`
            platformId,
            RuleSet (
                name,
                ExecutionRule ( type, parameters )
            )
        `);

    if (error) {
        console.error("[Cache] Error fetching rules from database:", error);
        return;
    }

    ruleCache.clear();
    for (const trader of data) {
        if (trader.RuleSet) {
            // The trader is assigned to a rule set.
            ruleCache.set(trader.platformId, trader.RuleSet.ExecutionRule as ExecutionRule[]);
        }
    }
    
    // Load the "Default" rule set separately for traders who have no assignment.
    const { data: defaultSetData, error: defaultSetError } = await supabase
        .from('RuleSet')
        .select(`ExecutionRule ( type, parameters )`)
        .eq('name', 'Default')
        .maybeSingle();
    
    if (defaultSetError) {
        // We can ignore the "PGRST116" error which just means no rows were found.
        if (defaultSetError.code !== 'PGRST116') {
            console.error("[Cache] Error fetching default rule set:", defaultSetError);
        }
    } else if (defaultSetData) {
        ruleCache.set("default", defaultSetData.ExecutionRule as ExecutionRule[]);
    }

    console.log(`[Cache] Successfully loaded rules for ${ruleCache.size} configurations.`);
};

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- API Endpoints ---
app.post('/api/process-trade', (req, res) => {
    const incomingTrade: Trade = req.body;

    if (!incomingTrade || !incomingTrade.traderId) {
        return res.status(400).json({ error: 'Invalid trade payload' });
    }

    const rules = ruleCache.get(String(incomingTrade.traderId)) || ruleCache.get("default") || [];
    
    console.log(`\n[API] Processing trade for ${incomingTrade.traderId} with ${rules.length} rule(s) from cache.`);

    try {
        const manipulatedTrade = processTrade(incomingTrade, rules);
        const result = {
            originalTrade: incomingTrade,
            manipulatedTrade: manipulatedTrade,
            appliedRules: rules,
        };
        res.status(200).json(result);
    } catch (error) {
        console.error(`[API] Error processing trade for trader ${incomingTrade.traderId}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// --- Server Startup ---
app.listen(PORT, async () => {
    await loadRulesIntoCache();
    console.log(`Backend API server is running on http://localhost:${PORT}`);
    
    // TODO: Set up a listener for database changes (e.g., using Supabase Realtime)
    // to automatically refresh the cache without restarting the server.
}); 
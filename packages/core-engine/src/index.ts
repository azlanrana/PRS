import { RuleType, JsonValue } from '@risk-control/shared-types';

// --- Type Definitions ---

export interface Trade {
  platform: string;
  traderId: string;
  symbol: string;
  volume: number;
  price: number;
  type: 'BUY' | 'SELL';
  // This property will be added if a delay rule is active.
  executionDelay?: number; 
  [key: string]: any;
}

export type ExecutionRule = {
  type: RuleType;
  parameters: JsonValue;
};

// --- Rule Implementations ---

/**
 * Applies a price skew to a trade.
 * @param price The original price.
 * @param params The parameters for the skew, e.g., { points: 5, direction: "WORSE" }.
 * @param tradeType The type of the trade ('BUY' or 'SELL').
 * @returns The skewed price.
 */
function applyPriceSkew(price: number, params: any, tradeType: 'BUY' | 'SELL'): number {
  const { points, direction } = params;
  let newPrice = price;
  const priceAdjustment = points * 0.0001; // Assuming 'points' are in pips for forex

  if (direction === 'WORSE') {
    if (tradeType === 'BUY') {
      newPrice += priceAdjustment; // Buy higher (worse)
    } else { // SELL
      newPrice -= priceAdjustment; // Sell lower (worse)
    }
  } else if (direction === 'BETTER') {
    if (tradeType === 'BUY') {
      newPrice -= priceAdjustment; // Buy lower (better)
    } else { // SELL
      newPrice += priceAdjustment; // Sell higher (better)
    }
  }

  return newPrice;
}

/**
 * Determines if a delay should be applied.
 * This function doesn't pause execution itself, but returns the delay duration.
 * @param params The parameters for the delay, e.g., { milliseconds: 200 }.
 * @returns The delay in milliseconds.
 */
function getDelay(params: any): number {
  return params.milliseconds || 0;
}


// --- Main Engine Logic ---

/**
 * The main function of the execution engine.
 * It takes an incoming trade and a set of rules, then applies the rules
 * to return a (potentially) modified trade.
 *
 * @param trade The original trade object from the platform bridge.
 * @param rules An array of execution rules to apply to this trade.
 * @returns The modified trade object.
 */
export function processTrade(trade: Trade, rules: ExecutionRule[]): Trade {
  let modifiedTrade: Trade = { ...trade };

  for (const rule of rules) {
    switch (rule.type) {
      case 'PRICE_SKEW':
        modifiedTrade.price = applyPriceSkew(modifiedTrade.price, rule.parameters, modifiedTrade.type);
        console.log(`Applied PRICE_SKEW. New price: ${modifiedTrade.price}`);
        break;
      
      case 'DELAY':
        modifiedTrade.executionDelay = getDelay(rule.parameters);
        console.log(`Applied DELAY. Delay set to: ${modifiedTrade.executionDelay}ms`);
        break;

      // ... other rule types will be handled here
      
      default:
        console.warn(`Rule type '${rule.type}' is defined but not yet implemented.`);
    }
  }

  return modifiedTrade;
} 
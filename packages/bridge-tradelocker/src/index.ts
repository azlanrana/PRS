import 'dotenv/config';
import { TradeLockerApiClient } from './tradelocker-api';

const BACKEND_API_URL = 'http://localhost:3001/api/process-trade';

async function main() {
  console.log('[TradeLocker Bridge] Initializing...');
  console.log(`[TradeLocker Bridge] Target API: ${BACKEND_API_URL}`);

  try {
    const apiClient = new TradeLockerApiClient();
    await apiClient.connect();
    const accounts = await apiClient.getAccounts();
    console.log('[TradeLocker Bridge] Accounts:', accounts);

    for (const account of accounts) {
      if (account.accNum) {
        const positions = await apiClient.getPositions(account.accNum);
        console.log(`[TradeLocker Bridge] Positions for account ${account.accNum}:`, positions);
      }
    }

    console.log('[TradeLocker Bridge] Connected to TradeLocker. Starting trade processing loop...');
    
    setInterval(async () => {
      try {
        const accounts = await apiClient.getAccounts();
        for (const account of accounts) {
          if (account.accNum) {
            const positions = await apiClient.getPositions(account.accNum);
            for (const position of positions) {
              const trade = transformPositionToTrade(position, account);
              await sendTradeToBackend(trade);
            }
          }
        }
      } catch (error) {
        console.error('[TradeLocker Bridge] Error in processing loop:', error);
      }
    }, 5000); // Poll every 5 seconds

  } catch (error) {
    console.error('[TradeLocker Bridge] An error occurred during initialization:', error);
    process.exit(1);
  }
}

function transformPositionToTrade(position: any, account: any): any {
  return {
    platform: 'TradeLocker',
    traderId: account.accountId.toString(),
    symbol: position.symbol, // This needs mapping to the correct symbol field
    price: position.entryPrice,
    volume: position.quantity,
    type: position.side.toUpperCase(),
    timestamp: new Date(position.createdAt).toISOString(),
    meta: {
      positionId: position.id,
    }
  };
}

async function sendTradeToBackend(trade: any) {
  console.log(`[TradeLocker Bridge] Sending trade for trader ${trade.traderId}: ${trade.type} ${trade.volume} lot of ${trade.symbol} at ${trade.price}`);

  try {
    const response = await fetch(BACKEND_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trade),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[TradeLocker Bridge] API Error: ${response.status} - ${errorText}`);
      return;
    }

    const result = await response.json();
    console.log(`[TradeLocker Bridge] Received manipulated trade: Price ${result.manipulatedTrade.price.toFixed(5)}`, result.appliedRules.length > 0 ? `with ${result.appliedRules.length} rule(s) applied.` : '');

  } catch (error) {
    console.error('[TradeLocker Bridge] Failed to send trade to backend API:', error);
  }
}

main();

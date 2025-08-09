import { processTrade, Trade, ExecutionRule } from './index';
import { RuleType } from '@risk-control/shared-types';

// Mock console to prevent logs during tests
global.console = { ...console, log: jest.fn(), warn: jest.fn() };

describe('Execution Engine', () => {

  const baseTrade: Trade = {
    platform: 'test',
    traderId: '1003',
    symbol: 'EURUSD',
    volume: 1.0,
    price: 1.1000,
    type: 'BUY',
  };

  it('should not modify a trade if no rules are provided', () => {
    const rules: ExecutionRule[] = [];
    const processed = processTrade(baseTrade, rules);
    expect(processed).toEqual(baseTrade);
  });

  it('should apply a "WORSE" PRICE_SKEW rule correctly to a BUY trade', () => {
    const rules: ExecutionRule[] = [
      { type: RuleType.PRICE_SKEW, parameters: { points: 10, direction: 'WORSE' } }
    ];
    const processed = processTrade(baseTrade, rules);
    // For a BUY, a worse price is a higher price. 1.1000 + (10 * 0.0001) = 1.1010
    expect(processed.price).toBeCloseTo(1.1010);
  });

  it('should apply a DELAY rule by adding the executionDelay property', () => {
    const rules: ExecutionRule[] = [
      { type: RuleType.DELAY, parameters: { milliseconds: 500 } }
    ];
    const processed = processTrade(baseTrade, rules);
    expect(processed.executionDelay).toBe(500);
  });

  it('should apply multiple rules in sequence', () => {
    const rules: ExecutionRule[] = [
      { type: RuleType.PRICE_SKEW, parameters: { points: 5, direction: 'WORSE' } },
      { type: RuleType.DELAY, parameters: { milliseconds: 150 } }
    ];
    const processed = processTrade(baseTrade, rules);
    expect(processed.price).toBeCloseTo(1.1005);
    expect(processed.executionDelay).toBe(150);
  });

  it('should handle and warn about unimplemented rule types', () => {
    const rules: ExecutionRule[] = [
      { type: RuleType.SLIPPAGE, parameters: {} }
    ];
    processTrade(baseTrade, rules);
    expect(console.warn).toHaveBeenCalledWith("Rule type 'SLIPPAGE' is defined but not yet implemented.");
  });

}); 
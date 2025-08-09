// This file replaces the auto-generated Prisma types for our backend services.
// It provides a single source of truth for the shapes of our data.

/**
 * Defines the type of execution manipulation rule.
 * This allows us to have different logic for each rule type in the engine.
 */
export enum RuleType {
    PRICE_SKEW = 'PRICE_SKEW',
    SLIPPAGE = 'SLIPPAGE',
    DELAY = 'DELAY',
    SPREAD_MARKUP = 'SPREAD_MARKUP',
    SYNTHETIC_COMM = 'SYNTHETIC_COMM',
    LIQUIDITY_THIN = 'LIQUIDITY_THIN',
}

/**
 * A flexible type for JSON data, used for rule parameters.
 */
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonValue }
  | JsonValue[];

/**
 * Represents a set of execution rules that can be applied to a trader.
 */
export type RuleSet = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}; 
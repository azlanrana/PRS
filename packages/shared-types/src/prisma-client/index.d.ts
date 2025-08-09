
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Trader
 * 
 */
export type Trader = $Result.DefaultSelection<Prisma.$TraderPayload>
/**
 * Model RuleSet
 * 
 */
export type RuleSet = $Result.DefaultSelection<Prisma.$RuleSetPayload>
/**
 * Model ExecutionRule
 * 
 */
export type ExecutionRule = $Result.DefaultSelection<Prisma.$ExecutionRulePayload>
/**
 * Model ExecutionLog
 * 
 */
export type ExecutionLog = $Result.DefaultSelection<Prisma.$ExecutionLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TraderStatus: {
  CLEAN: 'CLEAN',
  WATCHLIST: 'WATCHLIST',
  FLAGGED: 'FLAGGED'
};

export type TraderStatus = (typeof TraderStatus)[keyof typeof TraderStatus]


export const RuleType: {
  PRICE_SKEW: 'PRICE_SKEW',
  SLIPPAGE: 'SLIPPAGE',
  DELAY: 'DELAY',
  SPREAD_MARKUP: 'SPREAD_MARKUP',
  SYNTHETIC_COMM: 'SYNTHETIC_COMM',
  LIQUIDITY_THIN: 'LIQUIDITY_THIN'
};

export type RuleType = (typeof RuleType)[keyof typeof RuleType]

}

export type TraderStatus = $Enums.TraderStatus

export const TraderStatus: typeof $Enums.TraderStatus

export type RuleType = $Enums.RuleType

export const RuleType: typeof $Enums.RuleType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Traders
 * const traders = await prisma.trader.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Traders
   * const traders = await prisma.trader.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.trader`: Exposes CRUD operations for the **Trader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Traders
    * const traders = await prisma.trader.findMany()
    * ```
    */
  get trader(): Prisma.TraderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruleSet`: Exposes CRUD operations for the **RuleSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RuleSets
    * const ruleSets = await prisma.ruleSet.findMany()
    * ```
    */
  get ruleSet(): Prisma.RuleSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionRule`: Exposes CRUD operations for the **ExecutionRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionRules
    * const executionRules = await prisma.executionRule.findMany()
    * ```
    */
  get executionRule(): Prisma.ExecutionRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionLog`: Exposes CRUD operations for the **ExecutionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionLogs
    * const executionLogs = await prisma.executionLog.findMany()
    * ```
    */
  get executionLog(): Prisma.ExecutionLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Trader: 'Trader',
    RuleSet: 'RuleSet',
    ExecutionRule: 'ExecutionRule',
    ExecutionLog: 'ExecutionLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "trader" | "ruleSet" | "executionRule" | "executionLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trader: {
        payload: Prisma.$TraderPayload<ExtArgs>
        fields: Prisma.TraderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          findFirst: {
            args: Prisma.TraderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          findMany: {
            args: Prisma.TraderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>[]
          }
          create: {
            args: Prisma.TraderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          createMany: {
            args: Prisma.TraderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>[]
          }
          delete: {
            args: Prisma.TraderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          update: {
            args: Prisma.TraderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          deleteMany: {
            args: Prisma.TraderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TraderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderPayload>
          }
          aggregate: {
            args: Prisma.TraderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrader>
          }
          groupBy: {
            args: Prisma.TraderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraderCountArgs<ExtArgs>
            result: $Utils.Optional<TraderCountAggregateOutputType> | number
          }
        }
      }
      RuleSet: {
        payload: Prisma.$RuleSetPayload<ExtArgs>
        fields: Prisma.RuleSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>
          }
          findFirst: {
            args: Prisma.RuleSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>
          }
          findMany: {
            args: Prisma.RuleSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>[]
          }
          create: {
            args: Prisma.RuleSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>
          }
          createMany: {
            args: Prisma.RuleSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>[]
          }
          delete: {
            args: Prisma.RuleSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>
          }
          update: {
            args: Prisma.RuleSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>
          }
          deleteMany: {
            args: Prisma.RuleSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RuleSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSetPayload>
          }
          aggregate: {
            args: Prisma.RuleSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuleSet>
          }
          groupBy: {
            args: Prisma.RuleSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleSetCountArgs<ExtArgs>
            result: $Utils.Optional<RuleSetCountAggregateOutputType> | number
          }
        }
      }
      ExecutionRule: {
        payload: Prisma.$ExecutionRulePayload<ExtArgs>
        fields: Prisma.ExecutionRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>
          }
          findFirst: {
            args: Prisma.ExecutionRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>
          }
          findMany: {
            args: Prisma.ExecutionRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>[]
          }
          create: {
            args: Prisma.ExecutionRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>
          }
          createMany: {
            args: Prisma.ExecutionRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>[]
          }
          delete: {
            args: Prisma.ExecutionRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>
          }
          update: {
            args: Prisma.ExecutionRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>
          }
          deleteMany: {
            args: Prisma.ExecutionRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutionRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionRulePayload>
          }
          aggregate: {
            args: Prisma.ExecutionRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionRule>
          }
          groupBy: {
            args: Prisma.ExecutionRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionRuleCountAggregateOutputType> | number
          }
        }
      }
      ExecutionLog: {
        payload: Prisma.$ExecutionLogPayload<ExtArgs>
        fields: Prisma.ExecutionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findFirst: {
            args: Prisma.ExecutionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findMany: {
            args: Prisma.ExecutionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          create: {
            args: Prisma.ExecutionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          createMany: {
            args: Prisma.ExecutionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          delete: {
            args: Prisma.ExecutionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          update: {
            args: Prisma.ExecutionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          aggregate: {
            args: Prisma.ExecutionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionLog>
          }
          groupBy: {
            args: Prisma.ExecutionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    trader?: TraderOmit
    ruleSet?: RuleSetOmit
    executionRule?: ExecutionRuleOmit
    executionLog?: ExecutionLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TraderCountOutputType
   */

  export type TraderCountOutputType = {
    logs: number
  }

  export type TraderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | TraderCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * TraderCountOutputType without action
   */
  export type TraderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderCountOutputType
     */
    select?: TraderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TraderCountOutputType without action
   */
  export type TraderCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }


  /**
   * Count Type RuleSetCountOutputType
   */

  export type RuleSetCountOutputType = {
    rules: number
    traders: number
  }

  export type RuleSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | RuleSetCountOutputTypeCountRulesArgs
    traders?: boolean | RuleSetCountOutputTypeCountTradersArgs
  }

  // Custom InputTypes
  /**
   * RuleSetCountOutputType without action
   */
  export type RuleSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSetCountOutputType
     */
    select?: RuleSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuleSetCountOutputType without action
   */
  export type RuleSetCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionRuleWhereInput
  }

  /**
   * RuleSetCountOutputType without action
   */
  export type RuleSetCountOutputTypeCountTradersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Trader
   */

  export type AggregateTrader = {
    _count: TraderCountAggregateOutputType | null
    _min: TraderMinAggregateOutputType | null
    _max: TraderMaxAggregateOutputType | null
  }

  export type TraderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    platformId: string | null
    name: string | null
    status: $Enums.TraderStatus | null
    ruleSetId: string | null
  }

  export type TraderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    platformId: string | null
    name: string | null
    status: $Enums.TraderStatus | null
    ruleSetId: string | null
  }

  export type TraderCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    platformId: number
    name: number
    status: number
    ruleSetId: number
    _all: number
  }


  export type TraderMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    platformId?: true
    name?: true
    status?: true
    ruleSetId?: true
  }

  export type TraderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    platformId?: true
    name?: true
    status?: true
    ruleSetId?: true
  }

  export type TraderCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    platformId?: true
    name?: true
    status?: true
    ruleSetId?: true
    _all?: true
  }

  export type TraderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trader to aggregate.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Traders
    **/
    _count?: true | TraderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraderMaxAggregateInputType
  }

  export type GetTraderAggregateType<T extends TraderAggregateArgs> = {
        [P in keyof T & keyof AggregateTrader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrader[P]>
      : GetScalarType<T[P], AggregateTrader[P]>
  }




  export type TraderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraderWhereInput
    orderBy?: TraderOrderByWithAggregationInput | TraderOrderByWithAggregationInput[]
    by: TraderScalarFieldEnum[] | TraderScalarFieldEnum
    having?: TraderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraderCountAggregateInputType | true
    _min?: TraderMinAggregateInputType
    _max?: TraderMaxAggregateInputType
  }

  export type TraderGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    platformId: string
    name: string | null
    status: $Enums.TraderStatus
    ruleSetId: string | null
    _count: TraderCountAggregateOutputType | null
    _min: TraderMinAggregateOutputType | null
    _max: TraderMaxAggregateOutputType | null
  }

  type GetTraderGroupByPayload<T extends TraderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraderGroupByOutputType[P]>
            : GetScalarType<T[P], TraderGroupByOutputType[P]>
        }
      >
    >


  export type TraderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platformId?: boolean
    name?: boolean
    status?: boolean
    ruleSetId?: boolean
    ruleSet?: boolean | Trader$ruleSetArgs<ExtArgs>
    logs?: boolean | Trader$logsArgs<ExtArgs>
    _count?: boolean | TraderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trader"]>

  export type TraderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platformId?: boolean
    name?: boolean
    status?: boolean
    ruleSetId?: boolean
    ruleSet?: boolean | Trader$ruleSetArgs<ExtArgs>
  }, ExtArgs["result"]["trader"]>


  export type TraderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    platformId?: boolean
    name?: boolean
    status?: boolean
    ruleSetId?: boolean
  }

  export type TraderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "platformId" | "name" | "status" | "ruleSetId", ExtArgs["result"]["trader"]>
  export type TraderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruleSet?: boolean | Trader$ruleSetArgs<ExtArgs>
    logs?: boolean | Trader$logsArgs<ExtArgs>
    _count?: boolean | TraderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TraderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruleSet?: boolean | Trader$ruleSetArgs<ExtArgs>
  }

  export type $TraderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trader"
    objects: {
      ruleSet: Prisma.$RuleSetPayload<ExtArgs> | null
      logs: Prisma.$ExecutionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      platformId: string
      name: string | null
      status: $Enums.TraderStatus
      ruleSetId: string | null
    }, ExtArgs["result"]["trader"]>
    composites: {}
  }

  type TraderGetPayload<S extends boolean | null | undefined | TraderDefaultArgs> = $Result.GetResult<Prisma.$TraderPayload, S>

  type TraderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraderCountAggregateInputType | true
    }

  export interface TraderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trader'], meta: { name: 'Trader' } }
    /**
     * Find zero or one Trader that matches the filter.
     * @param {TraderFindUniqueArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraderFindUniqueArgs>(args: SelectSubset<T, TraderFindUniqueArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraderFindUniqueOrThrowArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraderFindUniqueOrThrowArgs>(args: SelectSubset<T, TraderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderFindFirstArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraderFindFirstArgs>(args?: SelectSubset<T, TraderFindFirstArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderFindFirstOrThrowArgs} args - Arguments to find a Trader
     * @example
     * // Get one Trader
     * const trader = await prisma.trader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraderFindFirstOrThrowArgs>(args?: SelectSubset<T, TraderFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Traders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Traders
     * const traders = await prisma.trader.findMany()
     * 
     * // Get first 10 Traders
     * const traders = await prisma.trader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traderWithIdOnly = await prisma.trader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraderFindManyArgs>(args?: SelectSubset<T, TraderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trader.
     * @param {TraderCreateArgs} args - Arguments to create a Trader.
     * @example
     * // Create one Trader
     * const Trader = await prisma.trader.create({
     *   data: {
     *     // ... data to create a Trader
     *   }
     * })
     * 
     */
    create<T extends TraderCreateArgs>(args: SelectSubset<T, TraderCreateArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Traders.
     * @param {TraderCreateManyArgs} args - Arguments to create many Traders.
     * @example
     * // Create many Traders
     * const trader = await prisma.trader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraderCreateManyArgs>(args?: SelectSubset<T, TraderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Traders and returns the data saved in the database.
     * @param {TraderCreateManyAndReturnArgs} args - Arguments to create many Traders.
     * @example
     * // Create many Traders
     * const trader = await prisma.trader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Traders and only return the `id`
     * const traderWithIdOnly = await prisma.trader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraderCreateManyAndReturnArgs>(args?: SelectSubset<T, TraderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trader.
     * @param {TraderDeleteArgs} args - Arguments to delete one Trader.
     * @example
     * // Delete one Trader
     * const Trader = await prisma.trader.delete({
     *   where: {
     *     // ... filter to delete one Trader
     *   }
     * })
     * 
     */
    delete<T extends TraderDeleteArgs>(args: SelectSubset<T, TraderDeleteArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trader.
     * @param {TraderUpdateArgs} args - Arguments to update one Trader.
     * @example
     * // Update one Trader
     * const trader = await prisma.trader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraderUpdateArgs>(args: SelectSubset<T, TraderUpdateArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Traders.
     * @param {TraderDeleteManyArgs} args - Arguments to filter Traders to delete.
     * @example
     * // Delete a few Traders
     * const { count } = await prisma.trader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraderDeleteManyArgs>(args?: SelectSubset<T, TraderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Traders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Traders
     * const trader = await prisma.trader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraderUpdateManyArgs>(args: SelectSubset<T, TraderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trader.
     * @param {TraderUpsertArgs} args - Arguments to update or create a Trader.
     * @example
     * // Update or create a Trader
     * const trader = await prisma.trader.upsert({
     *   create: {
     *     // ... data to create a Trader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trader we want to update
     *   }
     * })
     */
    upsert<T extends TraderUpsertArgs>(args: SelectSubset<T, TraderUpsertArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Traders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderCountArgs} args - Arguments to filter Traders to count.
     * @example
     * // Count the number of Traders
     * const count = await prisma.trader.count({
     *   where: {
     *     // ... the filter for the Traders we want to count
     *   }
     * })
    **/
    count<T extends TraderCountArgs>(
      args?: Subset<T, TraderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraderAggregateArgs>(args: Subset<T, TraderAggregateArgs>): Prisma.PrismaPromise<GetTraderAggregateType<T>>

    /**
     * Group by Trader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TraderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraderGroupByArgs['orderBy'] }
        : { orderBy?: TraderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trader model
   */
  readonly fields: TraderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruleSet<T extends Trader$ruleSetArgs<ExtArgs> = {}>(args?: Subset<T, Trader$ruleSetArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends Trader$logsArgs<ExtArgs> = {}>(args?: Subset<T, Trader$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trader model
   */
  interface TraderFieldRefs {
    readonly id: FieldRef<"Trader", 'String'>
    readonly createdAt: FieldRef<"Trader", 'DateTime'>
    readonly updatedAt: FieldRef<"Trader", 'DateTime'>
    readonly platformId: FieldRef<"Trader", 'String'>
    readonly name: FieldRef<"Trader", 'String'>
    readonly status: FieldRef<"Trader", 'TraderStatus'>
    readonly ruleSetId: FieldRef<"Trader", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trader findUnique
   */
  export type TraderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader findUniqueOrThrow
   */
  export type TraderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader findFirst
   */
  export type TraderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traders.
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traders.
     */
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * Trader findFirstOrThrow
   */
  export type TraderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Trader to fetch.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Traders.
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Traders.
     */
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * Trader findMany
   */
  export type TraderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter, which Traders to fetch.
     */
    where?: TraderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Traders to fetch.
     */
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Traders.
     */
    cursor?: TraderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Traders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Traders.
     */
    skip?: number
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * Trader create
   */
  export type TraderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * The data needed to create a Trader.
     */
    data: XOR<TraderCreateInput, TraderUncheckedCreateInput>
  }

  /**
   * Trader createMany
   */
  export type TraderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Traders.
     */
    data: TraderCreateManyInput | TraderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trader createManyAndReturn
   */
  export type TraderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * The data used to create many Traders.
     */
    data: TraderCreateManyInput | TraderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trader update
   */
  export type TraderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * The data needed to update a Trader.
     */
    data: XOR<TraderUpdateInput, TraderUncheckedUpdateInput>
    /**
     * Choose, which Trader to update.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader updateMany
   */
  export type TraderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Traders.
     */
    data: XOR<TraderUpdateManyMutationInput, TraderUncheckedUpdateManyInput>
    /**
     * Filter which Traders to update
     */
    where?: TraderWhereInput
  }

  /**
   * Trader upsert
   */
  export type TraderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * The filter to search for the Trader to update in case it exists.
     */
    where: TraderWhereUniqueInput
    /**
     * In case the Trader found by the `where` argument doesn't exist, create a new Trader with this data.
     */
    create: XOR<TraderCreateInput, TraderUncheckedCreateInput>
    /**
     * In case the Trader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraderUpdateInput, TraderUncheckedUpdateInput>
  }

  /**
   * Trader delete
   */
  export type TraderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    /**
     * Filter which Trader to delete.
     */
    where: TraderWhereUniqueInput
  }

  /**
   * Trader deleteMany
   */
  export type TraderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Traders to delete
     */
    where?: TraderWhereInput
  }

  /**
   * Trader.ruleSet
   */
  export type Trader$ruleSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    where?: RuleSetWhereInput
  }

  /**
   * Trader.logs
   */
  export type Trader$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * Trader without action
   */
  export type TraderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
  }


  /**
   * Model RuleSet
   */

  export type AggregateRuleSet = {
    _count: RuleSetCountAggregateOutputType | null
    _min: RuleSetMinAggregateOutputType | null
    _max: RuleSetMaxAggregateOutputType | null
  }

  export type RuleSetMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
  }

  export type RuleSetMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
  }

  export type RuleSetCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    _all: number
  }


  export type RuleSetMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
  }

  export type RuleSetMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
  }

  export type RuleSetCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RuleSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleSet to aggregate.
     */
    where?: RuleSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSets to fetch.
     */
    orderBy?: RuleSetOrderByWithRelationInput | RuleSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RuleSets
    **/
    _count?: true | RuleSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleSetMaxAggregateInputType
  }

  export type GetRuleSetAggregateType<T extends RuleSetAggregateArgs> = {
        [P in keyof T & keyof AggregateRuleSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuleSet[P]>
      : GetScalarType<T[P], AggregateRuleSet[P]>
  }




  export type RuleSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleSetWhereInput
    orderBy?: RuleSetOrderByWithAggregationInput | RuleSetOrderByWithAggregationInput[]
    by: RuleSetScalarFieldEnum[] | RuleSetScalarFieldEnum
    having?: RuleSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleSetCountAggregateInputType | true
    _min?: RuleSetMinAggregateInputType
    _max?: RuleSetMaxAggregateInputType
  }

  export type RuleSetGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    _count: RuleSetCountAggregateOutputType | null
    _min: RuleSetMinAggregateOutputType | null
    _max: RuleSetMaxAggregateOutputType | null
  }

  type GetRuleSetGroupByPayload<T extends RuleSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleSetGroupByOutputType[P]>
            : GetScalarType<T[P], RuleSetGroupByOutputType[P]>
        }
      >
    >


  export type RuleSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    rules?: boolean | RuleSet$rulesArgs<ExtArgs>
    traders?: boolean | RuleSet$tradersArgs<ExtArgs>
    _count?: boolean | RuleSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruleSet"]>

  export type RuleSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["ruleSet"]>


  export type RuleSetSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
  }

  export type RuleSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description", ExtArgs["result"]["ruleSet"]>
  export type RuleSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | RuleSet$rulesArgs<ExtArgs>
    traders?: boolean | RuleSet$tradersArgs<ExtArgs>
    _count?: boolean | RuleSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuleSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RuleSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RuleSet"
    objects: {
      rules: Prisma.$ExecutionRulePayload<ExtArgs>[]
      traders: Prisma.$TraderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
    }, ExtArgs["result"]["ruleSet"]>
    composites: {}
  }

  type RuleSetGetPayload<S extends boolean | null | undefined | RuleSetDefaultArgs> = $Result.GetResult<Prisma.$RuleSetPayload, S>

  type RuleSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleSetCountAggregateInputType | true
    }

  export interface RuleSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RuleSet'], meta: { name: 'RuleSet' } }
    /**
     * Find zero or one RuleSet that matches the filter.
     * @param {RuleSetFindUniqueArgs} args - Arguments to find a RuleSet
     * @example
     * // Get one RuleSet
     * const ruleSet = await prisma.ruleSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleSetFindUniqueArgs>(args: SelectSubset<T, RuleSetFindUniqueArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RuleSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleSetFindUniqueOrThrowArgs} args - Arguments to find a RuleSet
     * @example
     * // Get one RuleSet
     * const ruleSet = await prisma.ruleSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleSetFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetFindFirstArgs} args - Arguments to find a RuleSet
     * @example
     * // Get one RuleSet
     * const ruleSet = await prisma.ruleSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleSetFindFirstArgs>(args?: SelectSubset<T, RuleSetFindFirstArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetFindFirstOrThrowArgs} args - Arguments to find a RuleSet
     * @example
     * // Get one RuleSet
     * const ruleSet = await prisma.ruleSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleSetFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RuleSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RuleSets
     * const ruleSets = await prisma.ruleSet.findMany()
     * 
     * // Get first 10 RuleSets
     * const ruleSets = await prisma.ruleSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleSetWithIdOnly = await prisma.ruleSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleSetFindManyArgs>(args?: SelectSubset<T, RuleSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RuleSet.
     * @param {RuleSetCreateArgs} args - Arguments to create a RuleSet.
     * @example
     * // Create one RuleSet
     * const RuleSet = await prisma.ruleSet.create({
     *   data: {
     *     // ... data to create a RuleSet
     *   }
     * })
     * 
     */
    create<T extends RuleSetCreateArgs>(args: SelectSubset<T, RuleSetCreateArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RuleSets.
     * @param {RuleSetCreateManyArgs} args - Arguments to create many RuleSets.
     * @example
     * // Create many RuleSets
     * const ruleSet = await prisma.ruleSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleSetCreateManyArgs>(args?: SelectSubset<T, RuleSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RuleSets and returns the data saved in the database.
     * @param {RuleSetCreateManyAndReturnArgs} args - Arguments to create many RuleSets.
     * @example
     * // Create many RuleSets
     * const ruleSet = await prisma.ruleSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RuleSets and only return the `id`
     * const ruleSetWithIdOnly = await prisma.ruleSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleSetCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RuleSet.
     * @param {RuleSetDeleteArgs} args - Arguments to delete one RuleSet.
     * @example
     * // Delete one RuleSet
     * const RuleSet = await prisma.ruleSet.delete({
     *   where: {
     *     // ... filter to delete one RuleSet
     *   }
     * })
     * 
     */
    delete<T extends RuleSetDeleteArgs>(args: SelectSubset<T, RuleSetDeleteArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RuleSet.
     * @param {RuleSetUpdateArgs} args - Arguments to update one RuleSet.
     * @example
     * // Update one RuleSet
     * const ruleSet = await prisma.ruleSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleSetUpdateArgs>(args: SelectSubset<T, RuleSetUpdateArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RuleSets.
     * @param {RuleSetDeleteManyArgs} args - Arguments to filter RuleSets to delete.
     * @example
     * // Delete a few RuleSets
     * const { count } = await prisma.ruleSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleSetDeleteManyArgs>(args?: SelectSubset<T, RuleSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RuleSets
     * const ruleSet = await prisma.ruleSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleSetUpdateManyArgs>(args: SelectSubset<T, RuleSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RuleSet.
     * @param {RuleSetUpsertArgs} args - Arguments to update or create a RuleSet.
     * @example
     * // Update or create a RuleSet
     * const ruleSet = await prisma.ruleSet.upsert({
     *   create: {
     *     // ... data to create a RuleSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RuleSet we want to update
     *   }
     * })
     */
    upsert<T extends RuleSetUpsertArgs>(args: SelectSubset<T, RuleSetUpsertArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RuleSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetCountArgs} args - Arguments to filter RuleSets to count.
     * @example
     * // Count the number of RuleSets
     * const count = await prisma.ruleSet.count({
     *   where: {
     *     // ... the filter for the RuleSets we want to count
     *   }
     * })
    **/
    count<T extends RuleSetCountArgs>(
      args?: Subset<T, RuleSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RuleSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuleSetAggregateArgs>(args: Subset<T, RuleSetAggregateArgs>): Prisma.PrismaPromise<GetRuleSetAggregateType<T>>

    /**
     * Group by RuleSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuleSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleSetGroupByArgs['orderBy'] }
        : { orderBy?: RuleSetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuleSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RuleSet model
   */
  readonly fields: RuleSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RuleSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends RuleSet$rulesArgs<ExtArgs> = {}>(args?: Subset<T, RuleSet$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    traders<T extends RuleSet$tradersArgs<ExtArgs> = {}>(args?: Subset<T, RuleSet$tradersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RuleSet model
   */
  interface RuleSetFieldRefs {
    readonly id: FieldRef<"RuleSet", 'String'>
    readonly createdAt: FieldRef<"RuleSet", 'DateTime'>
    readonly updatedAt: FieldRef<"RuleSet", 'DateTime'>
    readonly name: FieldRef<"RuleSet", 'String'>
    readonly description: FieldRef<"RuleSet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RuleSet findUnique
   */
  export type RuleSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * Filter, which RuleSet to fetch.
     */
    where: RuleSetWhereUniqueInput
  }

  /**
   * RuleSet findUniqueOrThrow
   */
  export type RuleSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * Filter, which RuleSet to fetch.
     */
    where: RuleSetWhereUniqueInput
  }

  /**
   * RuleSet findFirst
   */
  export type RuleSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * Filter, which RuleSet to fetch.
     */
    where?: RuleSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSets to fetch.
     */
    orderBy?: RuleSetOrderByWithRelationInput | RuleSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleSets.
     */
    cursor?: RuleSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleSets.
     */
    distinct?: RuleSetScalarFieldEnum | RuleSetScalarFieldEnum[]
  }

  /**
   * RuleSet findFirstOrThrow
   */
  export type RuleSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * Filter, which RuleSet to fetch.
     */
    where?: RuleSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSets to fetch.
     */
    orderBy?: RuleSetOrderByWithRelationInput | RuleSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleSets.
     */
    cursor?: RuleSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleSets.
     */
    distinct?: RuleSetScalarFieldEnum | RuleSetScalarFieldEnum[]
  }

  /**
   * RuleSet findMany
   */
  export type RuleSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * Filter, which RuleSets to fetch.
     */
    where?: RuleSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSets to fetch.
     */
    orderBy?: RuleSetOrderByWithRelationInput | RuleSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RuleSets.
     */
    cursor?: RuleSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSets.
     */
    skip?: number
    distinct?: RuleSetScalarFieldEnum | RuleSetScalarFieldEnum[]
  }

  /**
   * RuleSet create
   */
  export type RuleSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * The data needed to create a RuleSet.
     */
    data: XOR<RuleSetCreateInput, RuleSetUncheckedCreateInput>
  }

  /**
   * RuleSet createMany
   */
  export type RuleSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RuleSets.
     */
    data: RuleSetCreateManyInput | RuleSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleSet createManyAndReturn
   */
  export type RuleSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * The data used to create many RuleSets.
     */
    data: RuleSetCreateManyInput | RuleSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleSet update
   */
  export type RuleSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * The data needed to update a RuleSet.
     */
    data: XOR<RuleSetUpdateInput, RuleSetUncheckedUpdateInput>
    /**
     * Choose, which RuleSet to update.
     */
    where: RuleSetWhereUniqueInput
  }

  /**
   * RuleSet updateMany
   */
  export type RuleSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RuleSets.
     */
    data: XOR<RuleSetUpdateManyMutationInput, RuleSetUncheckedUpdateManyInput>
    /**
     * Filter which RuleSets to update
     */
    where?: RuleSetWhereInput
  }

  /**
   * RuleSet upsert
   */
  export type RuleSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * The filter to search for the RuleSet to update in case it exists.
     */
    where: RuleSetWhereUniqueInput
    /**
     * In case the RuleSet found by the `where` argument doesn't exist, create a new RuleSet with this data.
     */
    create: XOR<RuleSetCreateInput, RuleSetUncheckedCreateInput>
    /**
     * In case the RuleSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleSetUpdateInput, RuleSetUncheckedUpdateInput>
  }

  /**
   * RuleSet delete
   */
  export type RuleSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
    /**
     * Filter which RuleSet to delete.
     */
    where: RuleSetWhereUniqueInput
  }

  /**
   * RuleSet deleteMany
   */
  export type RuleSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleSets to delete
     */
    where?: RuleSetWhereInput
  }

  /**
   * RuleSet.rules
   */
  export type RuleSet$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    where?: ExecutionRuleWhereInput
    orderBy?: ExecutionRuleOrderByWithRelationInput | ExecutionRuleOrderByWithRelationInput[]
    cursor?: ExecutionRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionRuleScalarFieldEnum | ExecutionRuleScalarFieldEnum[]
  }

  /**
   * RuleSet.traders
   */
  export type RuleSet$tradersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trader
     */
    select?: TraderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trader
     */
    omit?: TraderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderInclude<ExtArgs> | null
    where?: TraderWhereInput
    orderBy?: TraderOrderByWithRelationInput | TraderOrderByWithRelationInput[]
    cursor?: TraderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TraderScalarFieldEnum | TraderScalarFieldEnum[]
  }

  /**
   * RuleSet without action
   */
  export type RuleSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSet
     */
    select?: RuleSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSet
     */
    omit?: RuleSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSetInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionRule
   */

  export type AggregateExecutionRule = {
    _count: ExecutionRuleCountAggregateOutputType | null
    _min: ExecutionRuleMinAggregateOutputType | null
    _max: ExecutionRuleMaxAggregateOutputType | null
  }

  export type ExecutionRuleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.RuleType | null
    ruleSetId: string | null
  }

  export type ExecutionRuleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.RuleType | null
    ruleSetId: string | null
  }

  export type ExecutionRuleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    type: number
    parameters: number
    ruleSetId: number
    _all: number
  }


  export type ExecutionRuleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    ruleSetId?: true
  }

  export type ExecutionRuleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    ruleSetId?: true
  }

  export type ExecutionRuleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    parameters?: true
    ruleSetId?: true
    _all?: true
  }

  export type ExecutionRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionRule to aggregate.
     */
    where?: ExecutionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRules to fetch.
     */
    orderBy?: ExecutionRuleOrderByWithRelationInput | ExecutionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionRules
    **/
    _count?: true | ExecutionRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionRuleMaxAggregateInputType
  }

  export type GetExecutionRuleAggregateType<T extends ExecutionRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionRule[P]>
      : GetScalarType<T[P], AggregateExecutionRule[P]>
  }




  export type ExecutionRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionRuleWhereInput
    orderBy?: ExecutionRuleOrderByWithAggregationInput | ExecutionRuleOrderByWithAggregationInput[]
    by: ExecutionRuleScalarFieldEnum[] | ExecutionRuleScalarFieldEnum
    having?: ExecutionRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionRuleCountAggregateInputType | true
    _min?: ExecutionRuleMinAggregateInputType
    _max?: ExecutionRuleMaxAggregateInputType
  }

  export type ExecutionRuleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    type: $Enums.RuleType
    parameters: JsonValue
    ruleSetId: string
    _count: ExecutionRuleCountAggregateOutputType | null
    _min: ExecutionRuleMinAggregateOutputType | null
    _max: ExecutionRuleMaxAggregateOutputType | null
  }

  type GetExecutionRuleGroupByPayload<T extends ExecutionRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionRuleGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    parameters?: boolean
    ruleSetId?: boolean
    ruleSet?: boolean | RuleSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionRule"]>

  export type ExecutionRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    parameters?: boolean
    ruleSetId?: boolean
    ruleSet?: boolean | RuleSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionRule"]>


  export type ExecutionRuleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    parameters?: boolean
    ruleSetId?: boolean
  }

  export type ExecutionRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "type" | "parameters" | "ruleSetId", ExtArgs["result"]["executionRule"]>
  export type ExecutionRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruleSet?: boolean | RuleSetDefaultArgs<ExtArgs>
  }
  export type ExecutionRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ruleSet?: boolean | RuleSetDefaultArgs<ExtArgs>
  }

  export type $ExecutionRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionRule"
    objects: {
      ruleSet: Prisma.$RuleSetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      type: $Enums.RuleType
      parameters: Prisma.JsonValue
      ruleSetId: string
    }, ExtArgs["result"]["executionRule"]>
    composites: {}
  }

  type ExecutionRuleGetPayload<S extends boolean | null | undefined | ExecutionRuleDefaultArgs> = $Result.GetResult<Prisma.$ExecutionRulePayload, S>

  type ExecutionRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionRuleCountAggregateInputType | true
    }

  export interface ExecutionRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionRule'], meta: { name: 'ExecutionRule' } }
    /**
     * Find zero or one ExecutionRule that matches the filter.
     * @param {ExecutionRuleFindUniqueArgs} args - Arguments to find a ExecutionRule
     * @example
     * // Get one ExecutionRule
     * const executionRule = await prisma.executionRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionRuleFindUniqueArgs>(args: SelectSubset<T, ExecutionRuleFindUniqueArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionRuleFindUniqueOrThrowArgs} args - Arguments to find a ExecutionRule
     * @example
     * // Get one ExecutionRule
     * const executionRule = await prisma.executionRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleFindFirstArgs} args - Arguments to find a ExecutionRule
     * @example
     * // Get one ExecutionRule
     * const executionRule = await prisma.executionRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionRuleFindFirstArgs>(args?: SelectSubset<T, ExecutionRuleFindFirstArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleFindFirstOrThrowArgs} args - Arguments to find a ExecutionRule
     * @example
     * // Get one ExecutionRule
     * const executionRule = await prisma.executionRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionRules
     * const executionRules = await prisma.executionRule.findMany()
     * 
     * // Get first 10 ExecutionRules
     * const executionRules = await prisma.executionRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionRuleWithIdOnly = await prisma.executionRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionRuleFindManyArgs>(args?: SelectSubset<T, ExecutionRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionRule.
     * @param {ExecutionRuleCreateArgs} args - Arguments to create a ExecutionRule.
     * @example
     * // Create one ExecutionRule
     * const ExecutionRule = await prisma.executionRule.create({
     *   data: {
     *     // ... data to create a ExecutionRule
     *   }
     * })
     * 
     */
    create<T extends ExecutionRuleCreateArgs>(args: SelectSubset<T, ExecutionRuleCreateArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionRules.
     * @param {ExecutionRuleCreateManyArgs} args - Arguments to create many ExecutionRules.
     * @example
     * // Create many ExecutionRules
     * const executionRule = await prisma.executionRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionRuleCreateManyArgs>(args?: SelectSubset<T, ExecutionRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionRules and returns the data saved in the database.
     * @param {ExecutionRuleCreateManyAndReturnArgs} args - Arguments to create many ExecutionRules.
     * @example
     * // Create many ExecutionRules
     * const executionRule = await prisma.executionRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionRules and only return the `id`
     * const executionRuleWithIdOnly = await prisma.executionRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionRule.
     * @param {ExecutionRuleDeleteArgs} args - Arguments to delete one ExecutionRule.
     * @example
     * // Delete one ExecutionRule
     * const ExecutionRule = await prisma.executionRule.delete({
     *   where: {
     *     // ... filter to delete one ExecutionRule
     *   }
     * })
     * 
     */
    delete<T extends ExecutionRuleDeleteArgs>(args: SelectSubset<T, ExecutionRuleDeleteArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionRule.
     * @param {ExecutionRuleUpdateArgs} args - Arguments to update one ExecutionRule.
     * @example
     * // Update one ExecutionRule
     * const executionRule = await prisma.executionRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionRuleUpdateArgs>(args: SelectSubset<T, ExecutionRuleUpdateArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionRules.
     * @param {ExecutionRuleDeleteManyArgs} args - Arguments to filter ExecutionRules to delete.
     * @example
     * // Delete a few ExecutionRules
     * const { count } = await prisma.executionRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionRuleDeleteManyArgs>(args?: SelectSubset<T, ExecutionRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionRules
     * const executionRule = await prisma.executionRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionRuleUpdateManyArgs>(args: SelectSubset<T, ExecutionRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExecutionRule.
     * @param {ExecutionRuleUpsertArgs} args - Arguments to update or create a ExecutionRule.
     * @example
     * // Update or create a ExecutionRule
     * const executionRule = await prisma.executionRule.upsert({
     *   create: {
     *     // ... data to create a ExecutionRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionRule we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionRuleUpsertArgs>(args: SelectSubset<T, ExecutionRuleUpsertArgs<ExtArgs>>): Prisma__ExecutionRuleClient<$Result.GetResult<Prisma.$ExecutionRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleCountArgs} args - Arguments to filter ExecutionRules to count.
     * @example
     * // Count the number of ExecutionRules
     * const count = await prisma.executionRule.count({
     *   where: {
     *     // ... the filter for the ExecutionRules we want to count
     *   }
     * })
    **/
    count<T extends ExecutionRuleCountArgs>(
      args?: Subset<T, ExecutionRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionRuleAggregateArgs>(args: Subset<T, ExecutionRuleAggregateArgs>): Prisma.PrismaPromise<GetExecutionRuleAggregateType<T>>

    /**
     * Group by ExecutionRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionRuleGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionRule model
   */
  readonly fields: ExecutionRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ruleSet<T extends RuleSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuleSetDefaultArgs<ExtArgs>>): Prisma__RuleSetClient<$Result.GetResult<Prisma.$RuleSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecutionRule model
   */
  interface ExecutionRuleFieldRefs {
    readonly id: FieldRef<"ExecutionRule", 'String'>
    readonly createdAt: FieldRef<"ExecutionRule", 'DateTime'>
    readonly updatedAt: FieldRef<"ExecutionRule", 'DateTime'>
    readonly type: FieldRef<"ExecutionRule", 'RuleType'>
    readonly parameters: FieldRef<"ExecutionRule", 'Json'>
    readonly ruleSetId: FieldRef<"ExecutionRule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionRule findUnique
   */
  export type ExecutionRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionRule to fetch.
     */
    where: ExecutionRuleWhereUniqueInput
  }

  /**
   * ExecutionRule findUniqueOrThrow
   */
  export type ExecutionRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionRule to fetch.
     */
    where: ExecutionRuleWhereUniqueInput
  }

  /**
   * ExecutionRule findFirst
   */
  export type ExecutionRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionRule to fetch.
     */
    where?: ExecutionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRules to fetch.
     */
    orderBy?: ExecutionRuleOrderByWithRelationInput | ExecutionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionRules.
     */
    cursor?: ExecutionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionRules.
     */
    distinct?: ExecutionRuleScalarFieldEnum | ExecutionRuleScalarFieldEnum[]
  }

  /**
   * ExecutionRule findFirstOrThrow
   */
  export type ExecutionRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionRule to fetch.
     */
    where?: ExecutionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRules to fetch.
     */
    orderBy?: ExecutionRuleOrderByWithRelationInput | ExecutionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionRules.
     */
    cursor?: ExecutionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionRules.
     */
    distinct?: ExecutionRuleScalarFieldEnum | ExecutionRuleScalarFieldEnum[]
  }

  /**
   * ExecutionRule findMany
   */
  export type ExecutionRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionRules to fetch.
     */
    where?: ExecutionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionRules to fetch.
     */
    orderBy?: ExecutionRuleOrderByWithRelationInput | ExecutionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionRules.
     */
    cursor?: ExecutionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionRules.
     */
    skip?: number
    distinct?: ExecutionRuleScalarFieldEnum | ExecutionRuleScalarFieldEnum[]
  }

  /**
   * ExecutionRule create
   */
  export type ExecutionRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionRule.
     */
    data: XOR<ExecutionRuleCreateInput, ExecutionRuleUncheckedCreateInput>
  }

  /**
   * ExecutionRule createMany
   */
  export type ExecutionRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionRules.
     */
    data: ExecutionRuleCreateManyInput | ExecutionRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionRule createManyAndReturn
   */
  export type ExecutionRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionRules.
     */
    data: ExecutionRuleCreateManyInput | ExecutionRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionRule update
   */
  export type ExecutionRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionRule.
     */
    data: XOR<ExecutionRuleUpdateInput, ExecutionRuleUncheckedUpdateInput>
    /**
     * Choose, which ExecutionRule to update.
     */
    where: ExecutionRuleWhereUniqueInput
  }

  /**
   * ExecutionRule updateMany
   */
  export type ExecutionRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionRules.
     */
    data: XOR<ExecutionRuleUpdateManyMutationInput, ExecutionRuleUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionRules to update
     */
    where?: ExecutionRuleWhereInput
  }

  /**
   * ExecutionRule upsert
   */
  export type ExecutionRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionRule to update in case it exists.
     */
    where: ExecutionRuleWhereUniqueInput
    /**
     * In case the ExecutionRule found by the `where` argument doesn't exist, create a new ExecutionRule with this data.
     */
    create: XOR<ExecutionRuleCreateInput, ExecutionRuleUncheckedCreateInput>
    /**
     * In case the ExecutionRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionRuleUpdateInput, ExecutionRuleUncheckedUpdateInput>
  }

  /**
   * ExecutionRule delete
   */
  export type ExecutionRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
    /**
     * Filter which ExecutionRule to delete.
     */
    where: ExecutionRuleWhereUniqueInput
  }

  /**
   * ExecutionRule deleteMany
   */
  export type ExecutionRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionRules to delete
     */
    where?: ExecutionRuleWhereInput
  }

  /**
   * ExecutionRule without action
   */
  export type ExecutionRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionRule
     */
    select?: ExecutionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionRule
     */
    omit?: ExecutionRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionRuleInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionLog
   */

  export type AggregateExecutionLog = {
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  export type ExecutionLogMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    traderId: string | null
    ruleType: $Enums.RuleType | null
  }

  export type ExecutionLogMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    traderId: string | null
    ruleType: $Enums.RuleType | null
  }

  export type ExecutionLogCountAggregateOutputType = {
    id: number
    createdAt: number
    traderId: number
    ruleType: number
    originalTrade: number
    modifiedTrade: number
    appliedParameters: number
    _all: number
  }


  export type ExecutionLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    traderId?: true
    ruleType?: true
  }

  export type ExecutionLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    traderId?: true
    ruleType?: true
  }

  export type ExecutionLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    traderId?: true
    ruleType?: true
    originalTrade?: true
    modifiedTrade?: true
    appliedParameters?: true
    _all?: true
  }

  export type ExecutionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLog to aggregate.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionLogs
    **/
    _count?: true | ExecutionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type GetExecutionLogAggregateType<T extends ExecutionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionLog[P]>
      : GetScalarType<T[P], AggregateExecutionLog[P]>
  }




  export type ExecutionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithAggregationInput | ExecutionLogOrderByWithAggregationInput[]
    by: ExecutionLogScalarFieldEnum[] | ExecutionLogScalarFieldEnum
    having?: ExecutionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionLogCountAggregateInputType | true
    _min?: ExecutionLogMinAggregateInputType
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type ExecutionLogGroupByOutputType = {
    id: string
    createdAt: Date
    traderId: string
    ruleType: $Enums.RuleType
    originalTrade: JsonValue
    modifiedTrade: JsonValue
    appliedParameters: JsonValue
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  type GetExecutionLogGroupByPayload<T extends ExecutionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    traderId?: boolean
    ruleType?: boolean
    originalTrade?: boolean
    modifiedTrade?: boolean
    appliedParameters?: boolean
    trader?: boolean | TraderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    traderId?: boolean
    ruleType?: boolean
    originalTrade?: boolean
    modifiedTrade?: boolean
    appliedParameters?: boolean
    trader?: boolean | TraderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>


  export type ExecutionLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    traderId?: boolean
    ruleType?: boolean
    originalTrade?: boolean
    modifiedTrade?: boolean
    appliedParameters?: boolean
  }

  export type ExecutionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "traderId" | "ruleType" | "originalTrade" | "modifiedTrade" | "appliedParameters", ExtArgs["result"]["executionLog"]>
  export type ExecutionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trader?: boolean | TraderDefaultArgs<ExtArgs>
  }
  export type ExecutionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trader?: boolean | TraderDefaultArgs<ExtArgs>
  }

  export type $ExecutionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionLog"
    objects: {
      trader: Prisma.$TraderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      traderId: string
      ruleType: $Enums.RuleType
      originalTrade: Prisma.JsonValue
      modifiedTrade: Prisma.JsonValue
      appliedParameters: Prisma.JsonValue
    }, ExtArgs["result"]["executionLog"]>
    composites: {}
  }

  type ExecutionLogGetPayload<S extends boolean | null | undefined | ExecutionLogDefaultArgs> = $Result.GetResult<Prisma.$ExecutionLogPayload, S>

  type ExecutionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionLogCountAggregateInputType | true
    }

  export interface ExecutionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionLog'], meta: { name: 'ExecutionLog' } }
    /**
     * Find zero or one ExecutionLog that matches the filter.
     * @param {ExecutionLogFindUniqueArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionLogFindUniqueArgs>(args: SelectSubset<T, ExecutionLogFindUniqueArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionLogFindUniqueOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionLogFindFirstArgs>(args?: SelectSubset<T, ExecutionLogFindFirstArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany()
     * 
     * // Get first 10 ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionLogFindManyArgs>(args?: SelectSubset<T, ExecutionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionLog.
     * @param {ExecutionLogCreateArgs} args - Arguments to create a ExecutionLog.
     * @example
     * // Create one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.create({
     *   data: {
     *     // ... data to create a ExecutionLog
     *   }
     * })
     * 
     */
    create<T extends ExecutionLogCreateArgs>(args: SelectSubset<T, ExecutionLogCreateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionLogs.
     * @param {ExecutionLogCreateManyArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionLogCreateManyArgs>(args?: SelectSubset<T, ExecutionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionLogs and returns the data saved in the database.
     * @param {ExecutionLogCreateManyAndReturnArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionLog.
     * @param {ExecutionLogDeleteArgs} args - Arguments to delete one ExecutionLog.
     * @example
     * // Delete one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.delete({
     *   where: {
     *     // ... filter to delete one ExecutionLog
     *   }
     * })
     * 
     */
    delete<T extends ExecutionLogDeleteArgs>(args: SelectSubset<T, ExecutionLogDeleteArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionLog.
     * @param {ExecutionLogUpdateArgs} args - Arguments to update one ExecutionLog.
     * @example
     * // Update one ExecutionLog
     * const executionLog = await prisma.executionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionLogUpdateArgs>(args: SelectSubset<T, ExecutionLogUpdateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionLogs.
     * @param {ExecutionLogDeleteManyArgs} args - Arguments to filter ExecutionLogs to delete.
     * @example
     * // Delete a few ExecutionLogs
     * const { count } = await prisma.executionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionLogDeleteManyArgs>(args?: SelectSubset<T, ExecutionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionLogUpdateManyArgs>(args: SelectSubset<T, ExecutionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExecutionLog.
     * @param {ExecutionLogUpsertArgs} args - Arguments to update or create a ExecutionLog.
     * @example
     * // Update or create a ExecutionLog
     * const executionLog = await prisma.executionLog.upsert({
     *   create: {
     *     // ... data to create a ExecutionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionLog we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionLogUpsertArgs>(args: SelectSubset<T, ExecutionLogUpsertArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogCountArgs} args - Arguments to filter ExecutionLogs to count.
     * @example
     * // Count the number of ExecutionLogs
     * const count = await prisma.executionLog.count({
     *   where: {
     *     // ... the filter for the ExecutionLogs we want to count
     *   }
     * })
    **/
    count<T extends ExecutionLogCountArgs>(
      args?: Subset<T, ExecutionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionLogAggregateArgs>(args: Subset<T, ExecutionLogAggregateArgs>): Prisma.PrismaPromise<GetExecutionLogAggregateType<T>>

    /**
     * Group by ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionLogGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionLog model
   */
  readonly fields: ExecutionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trader<T extends TraderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TraderDefaultArgs<ExtArgs>>): Prisma__TraderClient<$Result.GetResult<Prisma.$TraderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExecutionLog model
   */
  interface ExecutionLogFieldRefs {
    readonly id: FieldRef<"ExecutionLog", 'String'>
    readonly createdAt: FieldRef<"ExecutionLog", 'DateTime'>
    readonly traderId: FieldRef<"ExecutionLog", 'String'>
    readonly ruleType: FieldRef<"ExecutionLog", 'RuleType'>
    readonly originalTrade: FieldRef<"ExecutionLog", 'Json'>
    readonly modifiedTrade: FieldRef<"ExecutionLog", 'Json'>
    readonly appliedParameters: FieldRef<"ExecutionLog", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionLog findUnique
   */
  export type ExecutionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findUniqueOrThrow
   */
  export type ExecutionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findFirst
   */
  export type ExecutionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findFirstOrThrow
   */
  export type ExecutionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findMany
   */
  export type ExecutionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLogs to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog create
   */
  export type ExecutionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionLog.
     */
    data: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
  }

  /**
   * ExecutionLog createMany
   */
  export type ExecutionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionLog createManyAndReturn
   */
  export type ExecutionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog update
   */
  export type ExecutionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionLog.
     */
    data: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
    /**
     * Choose, which ExecutionLog to update.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog updateMany
   */
  export type ExecutionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
  }

  /**
   * ExecutionLog upsert
   */
  export type ExecutionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionLog to update in case it exists.
     */
    where: ExecutionLogWhereUniqueInput
    /**
     * In case the ExecutionLog found by the `where` argument doesn't exist, create a new ExecutionLog with this data.
     */
    create: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
    /**
     * In case the ExecutionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
  }

  /**
   * ExecutionLog delete
   */
  export type ExecutionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter which ExecutionLog to delete.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog deleteMany
   */
  export type ExecutionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLogs to delete
     */
    where?: ExecutionLogWhereInput
  }

  /**
   * ExecutionLog without action
   */
  export type ExecutionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TraderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    platformId: 'platformId',
    name: 'name',
    status: 'status',
    ruleSetId: 'ruleSetId'
  };

  export type TraderScalarFieldEnum = (typeof TraderScalarFieldEnum)[keyof typeof TraderScalarFieldEnum]


  export const RuleSetScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description'
  };

  export type RuleSetScalarFieldEnum = (typeof RuleSetScalarFieldEnum)[keyof typeof RuleSetScalarFieldEnum]


  export const ExecutionRuleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    parameters: 'parameters',
    ruleSetId: 'ruleSetId'
  };

  export type ExecutionRuleScalarFieldEnum = (typeof ExecutionRuleScalarFieldEnum)[keyof typeof ExecutionRuleScalarFieldEnum]


  export const ExecutionLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    traderId: 'traderId',
    ruleType: 'ruleType',
    originalTrade: 'originalTrade',
    modifiedTrade: 'modifiedTrade',
    appliedParameters: 'appliedParameters'
  };

  export type ExecutionLogScalarFieldEnum = (typeof ExecutionLogScalarFieldEnum)[keyof typeof ExecutionLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TraderStatus'
   */
  export type EnumTraderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TraderStatus'>
    


  /**
   * Reference to a field of type 'TraderStatus[]'
   */
  export type ListEnumTraderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TraderStatus[]'>
    


  /**
   * Reference to a field of type 'RuleType'
   */
  export type EnumRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleType'>
    


  /**
   * Reference to a field of type 'RuleType[]'
   */
  export type ListEnumRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TraderWhereInput = {
    AND?: TraderWhereInput | TraderWhereInput[]
    OR?: TraderWhereInput[]
    NOT?: TraderWhereInput | TraderWhereInput[]
    id?: StringFilter<"Trader"> | string
    createdAt?: DateTimeFilter<"Trader"> | Date | string
    updatedAt?: DateTimeFilter<"Trader"> | Date | string
    platformId?: StringFilter<"Trader"> | string
    name?: StringNullableFilter<"Trader"> | string | null
    status?: EnumTraderStatusFilter<"Trader"> | $Enums.TraderStatus
    ruleSetId?: StringNullableFilter<"Trader"> | string | null
    ruleSet?: XOR<RuleSetNullableRelationFilter, RuleSetWhereInput> | null
    logs?: ExecutionLogListRelationFilter
  }

  export type TraderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platformId?: SortOrder
    name?: SortOrderInput | SortOrder
    status?: SortOrder
    ruleSetId?: SortOrderInput | SortOrder
    ruleSet?: RuleSetOrderByWithRelationInput
    logs?: ExecutionLogOrderByRelationAggregateInput
  }

  export type TraderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    platformId?: string
    AND?: TraderWhereInput | TraderWhereInput[]
    OR?: TraderWhereInput[]
    NOT?: TraderWhereInput | TraderWhereInput[]
    createdAt?: DateTimeFilter<"Trader"> | Date | string
    updatedAt?: DateTimeFilter<"Trader"> | Date | string
    name?: StringNullableFilter<"Trader"> | string | null
    status?: EnumTraderStatusFilter<"Trader"> | $Enums.TraderStatus
    ruleSetId?: StringNullableFilter<"Trader"> | string | null
    ruleSet?: XOR<RuleSetNullableRelationFilter, RuleSetWhereInput> | null
    logs?: ExecutionLogListRelationFilter
  }, "id" | "platformId">

  export type TraderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platformId?: SortOrder
    name?: SortOrderInput | SortOrder
    status?: SortOrder
    ruleSetId?: SortOrderInput | SortOrder
    _count?: TraderCountOrderByAggregateInput
    _max?: TraderMaxOrderByAggregateInput
    _min?: TraderMinOrderByAggregateInput
  }

  export type TraderScalarWhereWithAggregatesInput = {
    AND?: TraderScalarWhereWithAggregatesInput | TraderScalarWhereWithAggregatesInput[]
    OR?: TraderScalarWhereWithAggregatesInput[]
    NOT?: TraderScalarWhereWithAggregatesInput | TraderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trader"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trader"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trader"> | Date | string
    platformId?: StringWithAggregatesFilter<"Trader"> | string
    name?: StringNullableWithAggregatesFilter<"Trader"> | string | null
    status?: EnumTraderStatusWithAggregatesFilter<"Trader"> | $Enums.TraderStatus
    ruleSetId?: StringNullableWithAggregatesFilter<"Trader"> | string | null
  }

  export type RuleSetWhereInput = {
    AND?: RuleSetWhereInput | RuleSetWhereInput[]
    OR?: RuleSetWhereInput[]
    NOT?: RuleSetWhereInput | RuleSetWhereInput[]
    id?: StringFilter<"RuleSet"> | string
    createdAt?: DateTimeFilter<"RuleSet"> | Date | string
    updatedAt?: DateTimeFilter<"RuleSet"> | Date | string
    name?: StringFilter<"RuleSet"> | string
    description?: StringNullableFilter<"RuleSet"> | string | null
    rules?: ExecutionRuleListRelationFilter
    traders?: TraderListRelationFilter
  }

  export type RuleSetOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    rules?: ExecutionRuleOrderByRelationAggregateInput
    traders?: TraderOrderByRelationAggregateInput
  }

  export type RuleSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RuleSetWhereInput | RuleSetWhereInput[]
    OR?: RuleSetWhereInput[]
    NOT?: RuleSetWhereInput | RuleSetWhereInput[]
    createdAt?: DateTimeFilter<"RuleSet"> | Date | string
    updatedAt?: DateTimeFilter<"RuleSet"> | Date | string
    description?: StringNullableFilter<"RuleSet"> | string | null
    rules?: ExecutionRuleListRelationFilter
    traders?: TraderListRelationFilter
  }, "id" | "name">

  export type RuleSetOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RuleSetCountOrderByAggregateInput
    _max?: RuleSetMaxOrderByAggregateInput
    _min?: RuleSetMinOrderByAggregateInput
  }

  export type RuleSetScalarWhereWithAggregatesInput = {
    AND?: RuleSetScalarWhereWithAggregatesInput | RuleSetScalarWhereWithAggregatesInput[]
    OR?: RuleSetScalarWhereWithAggregatesInput[]
    NOT?: RuleSetScalarWhereWithAggregatesInput | RuleSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RuleSet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RuleSet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RuleSet"> | Date | string
    name?: StringWithAggregatesFilter<"RuleSet"> | string
    description?: StringNullableWithAggregatesFilter<"RuleSet"> | string | null
  }

  export type ExecutionRuleWhereInput = {
    AND?: ExecutionRuleWhereInput | ExecutionRuleWhereInput[]
    OR?: ExecutionRuleWhereInput[]
    NOT?: ExecutionRuleWhereInput | ExecutionRuleWhereInput[]
    id?: StringFilter<"ExecutionRule"> | string
    createdAt?: DateTimeFilter<"ExecutionRule"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionRule"> | Date | string
    type?: EnumRuleTypeFilter<"ExecutionRule"> | $Enums.RuleType
    parameters?: JsonFilter<"ExecutionRule">
    ruleSetId?: StringFilter<"ExecutionRule"> | string
    ruleSet?: XOR<RuleSetRelationFilter, RuleSetWhereInput>
  }

  export type ExecutionRuleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    ruleSetId?: SortOrder
    ruleSet?: RuleSetOrderByWithRelationInput
  }

  export type ExecutionRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionRuleWhereInput | ExecutionRuleWhereInput[]
    OR?: ExecutionRuleWhereInput[]
    NOT?: ExecutionRuleWhereInput | ExecutionRuleWhereInput[]
    createdAt?: DateTimeFilter<"ExecutionRule"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionRule"> | Date | string
    type?: EnumRuleTypeFilter<"ExecutionRule"> | $Enums.RuleType
    parameters?: JsonFilter<"ExecutionRule">
    ruleSetId?: StringFilter<"ExecutionRule"> | string
    ruleSet?: XOR<RuleSetRelationFilter, RuleSetWhereInput>
  }, "id">

  export type ExecutionRuleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    ruleSetId?: SortOrder
    _count?: ExecutionRuleCountOrderByAggregateInput
    _max?: ExecutionRuleMaxOrderByAggregateInput
    _min?: ExecutionRuleMinOrderByAggregateInput
  }

  export type ExecutionRuleScalarWhereWithAggregatesInput = {
    AND?: ExecutionRuleScalarWhereWithAggregatesInput | ExecutionRuleScalarWhereWithAggregatesInput[]
    OR?: ExecutionRuleScalarWhereWithAggregatesInput[]
    NOT?: ExecutionRuleScalarWhereWithAggregatesInput | ExecutionRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionRule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExecutionRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExecutionRule"> | Date | string
    type?: EnumRuleTypeWithAggregatesFilter<"ExecutionRule"> | $Enums.RuleType
    parameters?: JsonWithAggregatesFilter<"ExecutionRule">
    ruleSetId?: StringWithAggregatesFilter<"ExecutionRule"> | string
  }

  export type ExecutionLogWhereInput = {
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    createdAt?: DateTimeFilter<"ExecutionLog"> | Date | string
    traderId?: StringFilter<"ExecutionLog"> | string
    ruleType?: EnumRuleTypeFilter<"ExecutionLog"> | $Enums.RuleType
    originalTrade?: JsonFilter<"ExecutionLog">
    modifiedTrade?: JsonFilter<"ExecutionLog">
    appliedParameters?: JsonFilter<"ExecutionLog">
    trader?: XOR<TraderRelationFilter, TraderWhereInput>
  }

  export type ExecutionLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    traderId?: SortOrder
    ruleType?: SortOrder
    originalTrade?: SortOrder
    modifiedTrade?: SortOrder
    appliedParameters?: SortOrder
    trader?: TraderOrderByWithRelationInput
  }

  export type ExecutionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    createdAt?: DateTimeFilter<"ExecutionLog"> | Date | string
    traderId?: StringFilter<"ExecutionLog"> | string
    ruleType?: EnumRuleTypeFilter<"ExecutionLog"> | $Enums.RuleType
    originalTrade?: JsonFilter<"ExecutionLog">
    modifiedTrade?: JsonFilter<"ExecutionLog">
    appliedParameters?: JsonFilter<"ExecutionLog">
    trader?: XOR<TraderRelationFilter, TraderWhereInput>
  }, "id">

  export type ExecutionLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    traderId?: SortOrder
    ruleType?: SortOrder
    originalTrade?: SortOrder
    modifiedTrade?: SortOrder
    appliedParameters?: SortOrder
    _count?: ExecutionLogCountOrderByAggregateInput
    _max?: ExecutionLogMaxOrderByAggregateInput
    _min?: ExecutionLogMinOrderByAggregateInput
  }

  export type ExecutionLogScalarWhereWithAggregatesInput = {
    AND?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    OR?: ExecutionLogScalarWhereWithAggregatesInput[]
    NOT?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExecutionLog"> | Date | string
    traderId?: StringWithAggregatesFilter<"ExecutionLog"> | string
    ruleType?: EnumRuleTypeWithAggregatesFilter<"ExecutionLog"> | $Enums.RuleType
    originalTrade?: JsonWithAggregatesFilter<"ExecutionLog">
    modifiedTrade?: JsonWithAggregatesFilter<"ExecutionLog">
    appliedParameters?: JsonWithAggregatesFilter<"ExecutionLog">
  }

  export type TraderCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    ruleSet?: RuleSetCreateNestedOneWithoutTradersInput
    logs?: ExecutionLogCreateNestedManyWithoutTraderInput
  }

  export type TraderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    ruleSetId?: string | null
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutTraderInput
  }

  export type TraderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    ruleSet?: RuleSetUpdateOneWithoutTradersNestedInput
    logs?: ExecutionLogUpdateManyWithoutTraderNestedInput
  }

  export type TraderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    ruleSetId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: ExecutionLogUncheckedUpdateManyWithoutTraderNestedInput
  }

  export type TraderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    ruleSetId?: string | null
  }

  export type TraderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
  }

  export type TraderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    ruleSetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleSetCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    rules?: ExecutionRuleCreateNestedManyWithoutRuleSetInput
    traders?: TraderCreateNestedManyWithoutRuleSetInput
  }

  export type RuleSetUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    rules?: ExecutionRuleUncheckedCreateNestedManyWithoutRuleSetInput
    traders?: TraderUncheckedCreateNestedManyWithoutRuleSetInput
  }

  export type RuleSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: ExecutionRuleUpdateManyWithoutRuleSetNestedInput
    traders?: TraderUpdateManyWithoutRuleSetNestedInput
  }

  export type RuleSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: ExecutionRuleUncheckedUpdateManyWithoutRuleSetNestedInput
    traders?: TraderUncheckedUpdateManyWithoutRuleSetNestedInput
  }

  export type RuleSetCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
  }

  export type RuleSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionRuleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.RuleType
    parameters: JsonNullValueInput | InputJsonValue
    ruleSet: RuleSetCreateNestedOneWithoutRulesInput
  }

  export type ExecutionRuleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.RuleType
    parameters: JsonNullValueInput | InputJsonValue
    ruleSetId: string
  }

  export type ExecutionRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
    ruleSet?: RuleSetUpdateOneRequiredWithoutRulesNestedInput
  }

  export type ExecutionRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
    ruleSetId?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutionRuleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.RuleType
    parameters: JsonNullValueInput | InputJsonValue
    ruleSetId: string
  }

  export type ExecutionRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
    ruleSetId?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutionLogCreateInput = {
    id?: string
    createdAt?: Date | string
    ruleType: $Enums.RuleType
    originalTrade: JsonNullValueInput | InputJsonValue
    modifiedTrade: JsonNullValueInput | InputJsonValue
    appliedParameters: JsonNullValueInput | InputJsonValue
    trader: TraderCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    traderId: string
    ruleType: $Enums.RuleType
    originalTrade: JsonNullValueInput | InputJsonValue
    modifiedTrade: JsonNullValueInput | InputJsonValue
    appliedParameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
    trader?: TraderUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traderId?: StringFieldUpdateOperationsInput | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogCreateManyInput = {
    id?: string
    createdAt?: Date | string
    traderId: string
    ruleType: $Enums.RuleType
    originalTrade: JsonNullValueInput | InputJsonValue
    modifiedTrade: JsonNullValueInput | InputJsonValue
    appliedParameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traderId?: StringFieldUpdateOperationsInput | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTraderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TraderStatus | EnumTraderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTraderStatusFilter<$PrismaModel> | $Enums.TraderStatus
  }

  export type RuleSetNullableRelationFilter = {
    is?: RuleSetWhereInput | null
    isNot?: RuleSetWhereInput | null
  }

  export type ExecutionLogListRelationFilter = {
    every?: ExecutionLogWhereInput
    some?: ExecutionLogWhereInput
    none?: ExecutionLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExecutionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TraderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platformId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ruleSetId?: SortOrder
  }

  export type TraderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platformId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ruleSetId?: SortOrder
  }

  export type TraderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    platformId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    ruleSetId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTraderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TraderStatus | EnumTraderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTraderStatusWithAggregatesFilter<$PrismaModel> | $Enums.TraderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTraderStatusFilter<$PrismaModel>
    _max?: NestedEnumTraderStatusFilter<$PrismaModel>
  }

  export type ExecutionRuleListRelationFilter = {
    every?: ExecutionRuleWhereInput
    some?: ExecutionRuleWhereInput
    none?: ExecutionRuleWhereInput
  }

  export type TraderListRelationFilter = {
    every?: TraderWhereInput
    some?: TraderWhereInput
    none?: TraderWhereInput
  }

  export type ExecutionRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TraderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleSetCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RuleSetMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RuleSetMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EnumRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeFilter<$PrismaModel> | $Enums.RuleType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RuleSetRelationFilter = {
    is?: RuleSetWhereInput
    isNot?: RuleSetWhereInput
  }

  export type ExecutionRuleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    parameters?: SortOrder
    ruleSetId?: SortOrder
  }

  export type ExecutionRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    ruleSetId?: SortOrder
  }

  export type ExecutionRuleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    ruleSetId?: SortOrder
  }

  export type EnumRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumRuleTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TraderRelationFilter = {
    is?: TraderWhereInput
    isNot?: TraderWhereInput
  }

  export type ExecutionLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    traderId?: SortOrder
    ruleType?: SortOrder
    originalTrade?: SortOrder
    modifiedTrade?: SortOrder
    appliedParameters?: SortOrder
  }

  export type ExecutionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    traderId?: SortOrder
    ruleType?: SortOrder
  }

  export type ExecutionLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    traderId?: SortOrder
    ruleType?: SortOrder
  }

  export type RuleSetCreateNestedOneWithoutTradersInput = {
    create?: XOR<RuleSetCreateWithoutTradersInput, RuleSetUncheckedCreateWithoutTradersInput>
    connectOrCreate?: RuleSetCreateOrConnectWithoutTradersInput
    connect?: RuleSetWhereUniqueInput
  }

  export type ExecutionLogCreateNestedManyWithoutTraderInput = {
    create?: XOR<ExecutionLogCreateWithoutTraderInput, ExecutionLogUncheckedCreateWithoutTraderInput> | ExecutionLogCreateWithoutTraderInput[] | ExecutionLogUncheckedCreateWithoutTraderInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutTraderInput | ExecutionLogCreateOrConnectWithoutTraderInput[]
    createMany?: ExecutionLogCreateManyTraderInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutTraderInput = {
    create?: XOR<ExecutionLogCreateWithoutTraderInput, ExecutionLogUncheckedCreateWithoutTraderInput> | ExecutionLogCreateWithoutTraderInput[] | ExecutionLogUncheckedCreateWithoutTraderInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutTraderInput | ExecutionLogCreateOrConnectWithoutTraderInput[]
    createMany?: ExecutionLogCreateManyTraderInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTraderStatusFieldUpdateOperationsInput = {
    set?: $Enums.TraderStatus
  }

  export type RuleSetUpdateOneWithoutTradersNestedInput = {
    create?: XOR<RuleSetCreateWithoutTradersInput, RuleSetUncheckedCreateWithoutTradersInput>
    connectOrCreate?: RuleSetCreateOrConnectWithoutTradersInput
    upsert?: RuleSetUpsertWithoutTradersInput
    disconnect?: RuleSetWhereInput | boolean
    delete?: RuleSetWhereInput | boolean
    connect?: RuleSetWhereUniqueInput
    update?: XOR<XOR<RuleSetUpdateToOneWithWhereWithoutTradersInput, RuleSetUpdateWithoutTradersInput>, RuleSetUncheckedUpdateWithoutTradersInput>
  }

  export type ExecutionLogUpdateManyWithoutTraderNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutTraderInput, ExecutionLogUncheckedCreateWithoutTraderInput> | ExecutionLogCreateWithoutTraderInput[] | ExecutionLogUncheckedCreateWithoutTraderInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutTraderInput | ExecutionLogCreateOrConnectWithoutTraderInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutTraderInput | ExecutionLogUpsertWithWhereUniqueWithoutTraderInput[]
    createMany?: ExecutionLogCreateManyTraderInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutTraderInput | ExecutionLogUpdateWithWhereUniqueWithoutTraderInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutTraderInput | ExecutionLogUpdateManyWithWhereWithoutTraderInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutTraderNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutTraderInput, ExecutionLogUncheckedCreateWithoutTraderInput> | ExecutionLogCreateWithoutTraderInput[] | ExecutionLogUncheckedCreateWithoutTraderInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutTraderInput | ExecutionLogCreateOrConnectWithoutTraderInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutTraderInput | ExecutionLogUpsertWithWhereUniqueWithoutTraderInput[]
    createMany?: ExecutionLogCreateManyTraderInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutTraderInput | ExecutionLogUpdateWithWhereUniqueWithoutTraderInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutTraderInput | ExecutionLogUpdateManyWithWhereWithoutTraderInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionRuleCreateNestedManyWithoutRuleSetInput = {
    create?: XOR<ExecutionRuleCreateWithoutRuleSetInput, ExecutionRuleUncheckedCreateWithoutRuleSetInput> | ExecutionRuleCreateWithoutRuleSetInput[] | ExecutionRuleUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: ExecutionRuleCreateOrConnectWithoutRuleSetInput | ExecutionRuleCreateOrConnectWithoutRuleSetInput[]
    createMany?: ExecutionRuleCreateManyRuleSetInputEnvelope
    connect?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
  }

  export type TraderCreateNestedManyWithoutRuleSetInput = {
    create?: XOR<TraderCreateWithoutRuleSetInput, TraderUncheckedCreateWithoutRuleSetInput> | TraderCreateWithoutRuleSetInput[] | TraderUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: TraderCreateOrConnectWithoutRuleSetInput | TraderCreateOrConnectWithoutRuleSetInput[]
    createMany?: TraderCreateManyRuleSetInputEnvelope
    connect?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
  }

  export type ExecutionRuleUncheckedCreateNestedManyWithoutRuleSetInput = {
    create?: XOR<ExecutionRuleCreateWithoutRuleSetInput, ExecutionRuleUncheckedCreateWithoutRuleSetInput> | ExecutionRuleCreateWithoutRuleSetInput[] | ExecutionRuleUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: ExecutionRuleCreateOrConnectWithoutRuleSetInput | ExecutionRuleCreateOrConnectWithoutRuleSetInput[]
    createMany?: ExecutionRuleCreateManyRuleSetInputEnvelope
    connect?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
  }

  export type TraderUncheckedCreateNestedManyWithoutRuleSetInput = {
    create?: XOR<TraderCreateWithoutRuleSetInput, TraderUncheckedCreateWithoutRuleSetInput> | TraderCreateWithoutRuleSetInput[] | TraderUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: TraderCreateOrConnectWithoutRuleSetInput | TraderCreateOrConnectWithoutRuleSetInput[]
    createMany?: TraderCreateManyRuleSetInputEnvelope
    connect?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
  }

  export type ExecutionRuleUpdateManyWithoutRuleSetNestedInput = {
    create?: XOR<ExecutionRuleCreateWithoutRuleSetInput, ExecutionRuleUncheckedCreateWithoutRuleSetInput> | ExecutionRuleCreateWithoutRuleSetInput[] | ExecutionRuleUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: ExecutionRuleCreateOrConnectWithoutRuleSetInput | ExecutionRuleCreateOrConnectWithoutRuleSetInput[]
    upsert?: ExecutionRuleUpsertWithWhereUniqueWithoutRuleSetInput | ExecutionRuleUpsertWithWhereUniqueWithoutRuleSetInput[]
    createMany?: ExecutionRuleCreateManyRuleSetInputEnvelope
    set?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    disconnect?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    delete?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    connect?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    update?: ExecutionRuleUpdateWithWhereUniqueWithoutRuleSetInput | ExecutionRuleUpdateWithWhereUniqueWithoutRuleSetInput[]
    updateMany?: ExecutionRuleUpdateManyWithWhereWithoutRuleSetInput | ExecutionRuleUpdateManyWithWhereWithoutRuleSetInput[]
    deleteMany?: ExecutionRuleScalarWhereInput | ExecutionRuleScalarWhereInput[]
  }

  export type TraderUpdateManyWithoutRuleSetNestedInput = {
    create?: XOR<TraderCreateWithoutRuleSetInput, TraderUncheckedCreateWithoutRuleSetInput> | TraderCreateWithoutRuleSetInput[] | TraderUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: TraderCreateOrConnectWithoutRuleSetInput | TraderCreateOrConnectWithoutRuleSetInput[]
    upsert?: TraderUpsertWithWhereUniqueWithoutRuleSetInput | TraderUpsertWithWhereUniqueWithoutRuleSetInput[]
    createMany?: TraderCreateManyRuleSetInputEnvelope
    set?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    disconnect?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    delete?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    connect?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    update?: TraderUpdateWithWhereUniqueWithoutRuleSetInput | TraderUpdateWithWhereUniqueWithoutRuleSetInput[]
    updateMany?: TraderUpdateManyWithWhereWithoutRuleSetInput | TraderUpdateManyWithWhereWithoutRuleSetInput[]
    deleteMany?: TraderScalarWhereInput | TraderScalarWhereInput[]
  }

  export type ExecutionRuleUncheckedUpdateManyWithoutRuleSetNestedInput = {
    create?: XOR<ExecutionRuleCreateWithoutRuleSetInput, ExecutionRuleUncheckedCreateWithoutRuleSetInput> | ExecutionRuleCreateWithoutRuleSetInput[] | ExecutionRuleUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: ExecutionRuleCreateOrConnectWithoutRuleSetInput | ExecutionRuleCreateOrConnectWithoutRuleSetInput[]
    upsert?: ExecutionRuleUpsertWithWhereUniqueWithoutRuleSetInput | ExecutionRuleUpsertWithWhereUniqueWithoutRuleSetInput[]
    createMany?: ExecutionRuleCreateManyRuleSetInputEnvelope
    set?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    disconnect?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    delete?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    connect?: ExecutionRuleWhereUniqueInput | ExecutionRuleWhereUniqueInput[]
    update?: ExecutionRuleUpdateWithWhereUniqueWithoutRuleSetInput | ExecutionRuleUpdateWithWhereUniqueWithoutRuleSetInput[]
    updateMany?: ExecutionRuleUpdateManyWithWhereWithoutRuleSetInput | ExecutionRuleUpdateManyWithWhereWithoutRuleSetInput[]
    deleteMany?: ExecutionRuleScalarWhereInput | ExecutionRuleScalarWhereInput[]
  }

  export type TraderUncheckedUpdateManyWithoutRuleSetNestedInput = {
    create?: XOR<TraderCreateWithoutRuleSetInput, TraderUncheckedCreateWithoutRuleSetInput> | TraderCreateWithoutRuleSetInput[] | TraderUncheckedCreateWithoutRuleSetInput[]
    connectOrCreate?: TraderCreateOrConnectWithoutRuleSetInput | TraderCreateOrConnectWithoutRuleSetInput[]
    upsert?: TraderUpsertWithWhereUniqueWithoutRuleSetInput | TraderUpsertWithWhereUniqueWithoutRuleSetInput[]
    createMany?: TraderCreateManyRuleSetInputEnvelope
    set?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    disconnect?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    delete?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    connect?: TraderWhereUniqueInput | TraderWhereUniqueInput[]
    update?: TraderUpdateWithWhereUniqueWithoutRuleSetInput | TraderUpdateWithWhereUniqueWithoutRuleSetInput[]
    updateMany?: TraderUpdateManyWithWhereWithoutRuleSetInput | TraderUpdateManyWithWhereWithoutRuleSetInput[]
    deleteMany?: TraderScalarWhereInput | TraderScalarWhereInput[]
  }

  export type RuleSetCreateNestedOneWithoutRulesInput = {
    create?: XOR<RuleSetCreateWithoutRulesInput, RuleSetUncheckedCreateWithoutRulesInput>
    connectOrCreate?: RuleSetCreateOrConnectWithoutRulesInput
    connect?: RuleSetWhereUniqueInput
  }

  export type EnumRuleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RuleType
  }

  export type RuleSetUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<RuleSetCreateWithoutRulesInput, RuleSetUncheckedCreateWithoutRulesInput>
    connectOrCreate?: RuleSetCreateOrConnectWithoutRulesInput
    upsert?: RuleSetUpsertWithoutRulesInput
    connect?: RuleSetWhereUniqueInput
    update?: XOR<XOR<RuleSetUpdateToOneWithWhereWithoutRulesInput, RuleSetUpdateWithoutRulesInput>, RuleSetUncheckedUpdateWithoutRulesInput>
  }

  export type TraderCreateNestedOneWithoutLogsInput = {
    create?: XOR<TraderCreateWithoutLogsInput, TraderUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TraderCreateOrConnectWithoutLogsInput
    connect?: TraderWhereUniqueInput
  }

  export type TraderUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<TraderCreateWithoutLogsInput, TraderUncheckedCreateWithoutLogsInput>
    connectOrCreate?: TraderCreateOrConnectWithoutLogsInput
    upsert?: TraderUpsertWithoutLogsInput
    connect?: TraderWhereUniqueInput
    update?: XOR<XOR<TraderUpdateToOneWithWhereWithoutLogsInput, TraderUpdateWithoutLogsInput>, TraderUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTraderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TraderStatus | EnumTraderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTraderStatusFilter<$PrismaModel> | $Enums.TraderStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTraderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TraderStatus | EnumTraderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TraderStatus[] | ListEnumTraderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTraderStatusWithAggregatesFilter<$PrismaModel> | $Enums.TraderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTraderStatusFilter<$PrismaModel>
    _max?: NestedEnumTraderStatusFilter<$PrismaModel>
  }

  export type NestedEnumRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeFilter<$PrismaModel> | $Enums.RuleType
  }

  export type NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumRuleTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RuleSetCreateWithoutTradersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    rules?: ExecutionRuleCreateNestedManyWithoutRuleSetInput
  }

  export type RuleSetUncheckedCreateWithoutTradersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    rules?: ExecutionRuleUncheckedCreateNestedManyWithoutRuleSetInput
  }

  export type RuleSetCreateOrConnectWithoutTradersInput = {
    where: RuleSetWhereUniqueInput
    create: XOR<RuleSetCreateWithoutTradersInput, RuleSetUncheckedCreateWithoutTradersInput>
  }

  export type ExecutionLogCreateWithoutTraderInput = {
    id?: string
    createdAt?: Date | string
    ruleType: $Enums.RuleType
    originalTrade: JsonNullValueInput | InputJsonValue
    modifiedTrade: JsonNullValueInput | InputJsonValue
    appliedParameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUncheckedCreateWithoutTraderInput = {
    id?: string
    createdAt?: Date | string
    ruleType: $Enums.RuleType
    originalTrade: JsonNullValueInput | InputJsonValue
    modifiedTrade: JsonNullValueInput | InputJsonValue
    appliedParameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogCreateOrConnectWithoutTraderInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutTraderInput, ExecutionLogUncheckedCreateWithoutTraderInput>
  }

  export type ExecutionLogCreateManyTraderInputEnvelope = {
    data: ExecutionLogCreateManyTraderInput | ExecutionLogCreateManyTraderInput[]
    skipDuplicates?: boolean
  }

  export type RuleSetUpsertWithoutTradersInput = {
    update: XOR<RuleSetUpdateWithoutTradersInput, RuleSetUncheckedUpdateWithoutTradersInput>
    create: XOR<RuleSetCreateWithoutTradersInput, RuleSetUncheckedCreateWithoutTradersInput>
    where?: RuleSetWhereInput
  }

  export type RuleSetUpdateToOneWithWhereWithoutTradersInput = {
    where?: RuleSetWhereInput
    data: XOR<RuleSetUpdateWithoutTradersInput, RuleSetUncheckedUpdateWithoutTradersInput>
  }

  export type RuleSetUpdateWithoutTradersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: ExecutionRuleUpdateManyWithoutRuleSetNestedInput
  }

  export type RuleSetUncheckedUpdateWithoutTradersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: ExecutionRuleUncheckedUpdateManyWithoutRuleSetNestedInput
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutTraderInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutTraderInput, ExecutionLogUncheckedUpdateWithoutTraderInput>
    create: XOR<ExecutionLogCreateWithoutTraderInput, ExecutionLogUncheckedCreateWithoutTraderInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutTraderInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutTraderInput, ExecutionLogUncheckedUpdateWithoutTraderInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutTraderInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutTraderInput>
  }

  export type ExecutionLogScalarWhereInput = {
    AND?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    OR?: ExecutionLogScalarWhereInput[]
    NOT?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    createdAt?: DateTimeFilter<"ExecutionLog"> | Date | string
    traderId?: StringFilter<"ExecutionLog"> | string
    ruleType?: EnumRuleTypeFilter<"ExecutionLog"> | $Enums.RuleType
    originalTrade?: JsonFilter<"ExecutionLog">
    modifiedTrade?: JsonFilter<"ExecutionLog">
    appliedParameters?: JsonFilter<"ExecutionLog">
  }

  export type ExecutionRuleCreateWithoutRuleSetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.RuleType
    parameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionRuleUncheckedCreateWithoutRuleSetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.RuleType
    parameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionRuleCreateOrConnectWithoutRuleSetInput = {
    where: ExecutionRuleWhereUniqueInput
    create: XOR<ExecutionRuleCreateWithoutRuleSetInput, ExecutionRuleUncheckedCreateWithoutRuleSetInput>
  }

  export type ExecutionRuleCreateManyRuleSetInputEnvelope = {
    data: ExecutionRuleCreateManyRuleSetInput | ExecutionRuleCreateManyRuleSetInput[]
    skipDuplicates?: boolean
  }

  export type TraderCreateWithoutRuleSetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    logs?: ExecutionLogCreateNestedManyWithoutTraderInput
  }

  export type TraderUncheckedCreateWithoutRuleSetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutTraderInput
  }

  export type TraderCreateOrConnectWithoutRuleSetInput = {
    where: TraderWhereUniqueInput
    create: XOR<TraderCreateWithoutRuleSetInput, TraderUncheckedCreateWithoutRuleSetInput>
  }

  export type TraderCreateManyRuleSetInputEnvelope = {
    data: TraderCreateManyRuleSetInput | TraderCreateManyRuleSetInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionRuleUpsertWithWhereUniqueWithoutRuleSetInput = {
    where: ExecutionRuleWhereUniqueInput
    update: XOR<ExecutionRuleUpdateWithoutRuleSetInput, ExecutionRuleUncheckedUpdateWithoutRuleSetInput>
    create: XOR<ExecutionRuleCreateWithoutRuleSetInput, ExecutionRuleUncheckedCreateWithoutRuleSetInput>
  }

  export type ExecutionRuleUpdateWithWhereUniqueWithoutRuleSetInput = {
    where: ExecutionRuleWhereUniqueInput
    data: XOR<ExecutionRuleUpdateWithoutRuleSetInput, ExecutionRuleUncheckedUpdateWithoutRuleSetInput>
  }

  export type ExecutionRuleUpdateManyWithWhereWithoutRuleSetInput = {
    where: ExecutionRuleScalarWhereInput
    data: XOR<ExecutionRuleUpdateManyMutationInput, ExecutionRuleUncheckedUpdateManyWithoutRuleSetInput>
  }

  export type ExecutionRuleScalarWhereInput = {
    AND?: ExecutionRuleScalarWhereInput | ExecutionRuleScalarWhereInput[]
    OR?: ExecutionRuleScalarWhereInput[]
    NOT?: ExecutionRuleScalarWhereInput | ExecutionRuleScalarWhereInput[]
    id?: StringFilter<"ExecutionRule"> | string
    createdAt?: DateTimeFilter<"ExecutionRule"> | Date | string
    updatedAt?: DateTimeFilter<"ExecutionRule"> | Date | string
    type?: EnumRuleTypeFilter<"ExecutionRule"> | $Enums.RuleType
    parameters?: JsonFilter<"ExecutionRule">
    ruleSetId?: StringFilter<"ExecutionRule"> | string
  }

  export type TraderUpsertWithWhereUniqueWithoutRuleSetInput = {
    where: TraderWhereUniqueInput
    update: XOR<TraderUpdateWithoutRuleSetInput, TraderUncheckedUpdateWithoutRuleSetInput>
    create: XOR<TraderCreateWithoutRuleSetInput, TraderUncheckedCreateWithoutRuleSetInput>
  }

  export type TraderUpdateWithWhereUniqueWithoutRuleSetInput = {
    where: TraderWhereUniqueInput
    data: XOR<TraderUpdateWithoutRuleSetInput, TraderUncheckedUpdateWithoutRuleSetInput>
  }

  export type TraderUpdateManyWithWhereWithoutRuleSetInput = {
    where: TraderScalarWhereInput
    data: XOR<TraderUpdateManyMutationInput, TraderUncheckedUpdateManyWithoutRuleSetInput>
  }

  export type TraderScalarWhereInput = {
    AND?: TraderScalarWhereInput | TraderScalarWhereInput[]
    OR?: TraderScalarWhereInput[]
    NOT?: TraderScalarWhereInput | TraderScalarWhereInput[]
    id?: StringFilter<"Trader"> | string
    createdAt?: DateTimeFilter<"Trader"> | Date | string
    updatedAt?: DateTimeFilter<"Trader"> | Date | string
    platformId?: StringFilter<"Trader"> | string
    name?: StringNullableFilter<"Trader"> | string | null
    status?: EnumTraderStatusFilter<"Trader"> | $Enums.TraderStatus
    ruleSetId?: StringNullableFilter<"Trader"> | string | null
  }

  export type RuleSetCreateWithoutRulesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    traders?: TraderCreateNestedManyWithoutRuleSetInput
  }

  export type RuleSetUncheckedCreateWithoutRulesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description?: string | null
    traders?: TraderUncheckedCreateNestedManyWithoutRuleSetInput
  }

  export type RuleSetCreateOrConnectWithoutRulesInput = {
    where: RuleSetWhereUniqueInput
    create: XOR<RuleSetCreateWithoutRulesInput, RuleSetUncheckedCreateWithoutRulesInput>
  }

  export type RuleSetUpsertWithoutRulesInput = {
    update: XOR<RuleSetUpdateWithoutRulesInput, RuleSetUncheckedUpdateWithoutRulesInput>
    create: XOR<RuleSetCreateWithoutRulesInput, RuleSetUncheckedCreateWithoutRulesInput>
    where?: RuleSetWhereInput
  }

  export type RuleSetUpdateToOneWithWhereWithoutRulesInput = {
    where?: RuleSetWhereInput
    data: XOR<RuleSetUpdateWithoutRulesInput, RuleSetUncheckedUpdateWithoutRulesInput>
  }

  export type RuleSetUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    traders?: TraderUpdateManyWithoutRuleSetNestedInput
  }

  export type RuleSetUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    traders?: TraderUncheckedUpdateManyWithoutRuleSetNestedInput
  }

  export type TraderCreateWithoutLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    ruleSet?: RuleSetCreateNestedOneWithoutTradersInput
  }

  export type TraderUncheckedCreateWithoutLogsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
    ruleSetId?: string | null
  }

  export type TraderCreateOrConnectWithoutLogsInput = {
    where: TraderWhereUniqueInput
    create: XOR<TraderCreateWithoutLogsInput, TraderUncheckedCreateWithoutLogsInput>
  }

  export type TraderUpsertWithoutLogsInput = {
    update: XOR<TraderUpdateWithoutLogsInput, TraderUncheckedUpdateWithoutLogsInput>
    create: XOR<TraderCreateWithoutLogsInput, TraderUncheckedCreateWithoutLogsInput>
    where?: TraderWhereInput
  }

  export type TraderUpdateToOneWithWhereWithoutLogsInput = {
    where?: TraderWhereInput
    data: XOR<TraderUpdateWithoutLogsInput, TraderUncheckedUpdateWithoutLogsInput>
  }

  export type TraderUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    ruleSet?: RuleSetUpdateOneWithoutTradersNestedInput
  }

  export type TraderUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    ruleSetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionLogCreateManyTraderInput = {
    id?: string
    createdAt?: Date | string
    ruleType: $Enums.RuleType
    originalTrade: JsonNullValueInput | InputJsonValue
    modifiedTrade: JsonNullValueInput | InputJsonValue
    appliedParameters: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUpdateWithoutTraderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUncheckedUpdateWithoutTraderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionLogUncheckedUpdateManyWithoutTraderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruleType?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    originalTrade?: JsonNullValueInput | InputJsonValue
    modifiedTrade?: JsonNullValueInput | InputJsonValue
    appliedParameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionRuleCreateManyRuleSetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.RuleType
    parameters: JsonNullValueInput | InputJsonValue
  }

  export type TraderCreateManyRuleSetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    platformId: string
    name?: string | null
    status?: $Enums.TraderStatus
  }

  export type ExecutionRuleUpdateWithoutRuleSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionRuleUncheckedUpdateWithoutRuleSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
  }

  export type ExecutionRuleUncheckedUpdateManyWithoutRuleSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    parameters?: JsonNullValueInput | InputJsonValue
  }

  export type TraderUpdateWithoutRuleSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    logs?: ExecutionLogUpdateManyWithoutTraderNestedInput
  }

  export type TraderUncheckedUpdateWithoutRuleSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
    logs?: ExecutionLogUncheckedUpdateManyWithoutTraderNestedInput
  }

  export type TraderUncheckedUpdateManyWithoutRuleSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platformId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTraderStatusFieldUpdateOperationsInput | $Enums.TraderStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
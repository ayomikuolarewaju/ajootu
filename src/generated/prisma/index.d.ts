
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model GroupActivity
 * 
 */
export type GroupActivity = $Result.DefaultSelection<Prisma.$GroupActivityPayload>
/**
 * Model GroupInvitation
 * 
 */
export type GroupInvitation = $Result.DefaultSelection<Prisma.$GroupInvitationPayload>
/**
 * Model JoinRequest
 * 
 */
export type JoinRequest = $Result.DefaultSelection<Prisma.$JoinRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Member_Role: {
  Admin: 'Admin',
  Moderator: 'Moderator',
  Member: 'Member'
};

export type Member_Role = (typeof Member_Role)[keyof typeof Member_Role]

}

export type Member_Role = $Enums.Member_Role

export const Member_Role: typeof $Enums.Member_Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupActivity`: Exposes CRUD operations for the **GroupActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupActivities
    * const groupActivities = await prisma.groupActivity.findMany()
    * ```
    */
  get groupActivity(): Prisma.GroupActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupInvitation`: Exposes CRUD operations for the **GroupInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupInvitations
    * const groupInvitations = await prisma.groupInvitation.findMany()
    * ```
    */
  get groupInvitation(): Prisma.GroupInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinRequest`: Exposes CRUD operations for the **JoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinRequests
    * const joinRequests = await prisma.joinRequest.findMany()
    * ```
    */
  get joinRequest(): Prisma.JoinRequestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    User: 'User',
    Group: 'Group',
    Member: 'Member',
    GroupActivity: 'GroupActivity',
    GroupInvitation: 'GroupInvitation',
    JoinRequest: 'JoinRequest'
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
      modelProps: "user" | "group" | "member" | "groupActivity" | "groupInvitation" | "joinRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      GroupActivity: {
        payload: Prisma.$GroupActivityPayload<ExtArgs>
        fields: Prisma.GroupActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>
          }
          findFirst: {
            args: Prisma.GroupActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>
          }
          findMany: {
            args: Prisma.GroupActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>[]
          }
          create: {
            args: Prisma.GroupActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>
          }
          createMany: {
            args: Prisma.GroupActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>[]
          }
          delete: {
            args: Prisma.GroupActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>
          }
          update: {
            args: Prisma.GroupActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>
          }
          deleteMany: {
            args: Prisma.GroupActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>[]
          }
          upsert: {
            args: Prisma.GroupActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupActivityPayload>
          }
          aggregate: {
            args: Prisma.GroupActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupActivity>
          }
          groupBy: {
            args: Prisma.GroupActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupActivityCountArgs<ExtArgs>
            result: $Utils.Optional<GroupActivityCountAggregateOutputType> | number
          }
        }
      }
      GroupInvitation: {
        payload: Prisma.$GroupInvitationPayload<ExtArgs>
        fields: Prisma.GroupInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          findFirst: {
            args: Prisma.GroupInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          findMany: {
            args: Prisma.GroupInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>[]
          }
          create: {
            args: Prisma.GroupInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          createMany: {
            args: Prisma.GroupInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>[]
          }
          delete: {
            args: Prisma.GroupInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          update: {
            args: Prisma.GroupInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          deleteMany: {
            args: Prisma.GroupInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>[]
          }
          upsert: {
            args: Prisma.GroupInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupInvitationPayload>
          }
          aggregate: {
            args: Prisma.GroupInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupInvitation>
          }
          groupBy: {
            args: Prisma.GroupInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<GroupInvitationCountAggregateOutputType> | number
          }
        }
      }
      JoinRequest: {
        payload: Prisma.$JoinRequestPayload<ExtArgs>
        fields: Prisma.JoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findFirst: {
            args: Prisma.JoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findMany: {
            args: Prisma.JoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          create: {
            args: Prisma.JoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          createMany: {
            args: Prisma.JoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          delete: {
            args: Prisma.JoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          update: {
            args: Prisma.JoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.JoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.JoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          aggregate: {
            args: Prisma.JoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinRequest>
          }
          groupBy: {
            args: Prisma.JoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestCountAggregateOutputType> | number
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
    user?: UserOmit
    group?: GroupOmit
    member?: MemberOmit
    groupActivity?: GroupActivityOmit
    groupInvitation?: GroupInvitationOmit
    joinRequest?: JoinRequestOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    group: number
    memberships: number
    groupActivities: number
    invitations: number
    joinRequests: number
    GroupInvitation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | UserCountOutputTypeCountGroupArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    groupActivities?: boolean | UserCountOutputTypeCountGroupActivitiesArgs
    invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
    joinRequests?: boolean | UserCountOutputTypeCountJoinRequestsArgs
    GroupInvitation?: boolean | UserCountOutputTypeCountGroupInvitationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    invitations: number
    joinRequests: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    invitations?: boolean | GroupCountOutputTypeCountInvitationsArgs
    joinRequests?: boolean | GroupCountOutputTypeCountJoinRequestsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountJoinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
  }


  /**
   * Count Type GroupActivityCountOutputType
   */

  export type GroupActivityCountOutputType = {
    groups: number
  }

  export type GroupActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | GroupActivityCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * GroupActivityCountOutputType without action
   */
  export type GroupActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivityCountOutputType
     */
    select?: GroupActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupActivityCountOutputType without action
   */
  export type GroupActivityCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    groupActivities?: boolean | User$groupActivitiesArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    GroupInvitation?: boolean | User$GroupInvitationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    groupActivities?: boolean | User$groupActivitiesArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    joinRequests?: boolean | User$joinRequestsArgs<ExtArgs>
    GroupInvitation?: boolean | User$GroupInvitationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>[]
      memberships: Prisma.$MemberPayload<ExtArgs>[]
      groupActivities: Prisma.$GroupActivityPayload<ExtArgs>[]
      invitations: Prisma.$GroupInvitationPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
      GroupInvitation: Prisma.$GroupInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends User$groupArgs<ExtArgs> = {}>(args?: Subset<T, User$groupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupActivities<T extends User$groupActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$groupActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends User$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends User$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GroupInvitation<T extends User$GroupInvitationArgs<ExtArgs> = {}>(args?: Subset<T, User$GroupInvitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.group
   */
  export type User$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * User.groupActivities
   */
  export type User$groupActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    where?: GroupActivityWhereInput
    orderBy?: GroupActivityOrderByWithRelationInput | GroupActivityOrderByWithRelationInput[]
    cursor?: GroupActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupActivityScalarFieldEnum | GroupActivityScalarFieldEnum[]
  }

  /**
   * User.invitations
   */
  export type User$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    cursor?: GroupInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * User.joinRequests
   */
  export type User$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * User.GroupInvitation
   */
  export type User$GroupInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    cursor?: GroupInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    role: string | null
    avatar: string | null
    color: string | null
    lastActivity: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    creatorId: string | null
    avatarActivityId: string | null
    roles: $Enums.Member_Role | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    role: string | null
    avatar: string | null
    color: string | null
    lastActivity: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    creatorId: string | null
    avatarActivityId: string | null
    roles: $Enums.Member_Role | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    role: number
    avatar: number
    color: number
    lastActivity: number
    isPrivate: number
    createdAt: number
    creatorId: number
    avatarActivityId: number
    roles: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    role?: true
    avatar?: true
    color?: true
    lastActivity?: true
    isPrivate?: true
    createdAt?: true
    creatorId?: true
    avatarActivityId?: true
    roles?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    role?: true
    avatar?: true
    color?: true
    lastActivity?: true
    isPrivate?: true
    createdAt?: true
    creatorId?: true
    avatarActivityId?: true
    roles?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    role?: true
    avatar?: true
    color?: true
    lastActivity?: true
    isPrivate?: true
    createdAt?: true
    creatorId?: true
    avatarActivityId?: true
    roles?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    description: string | null
    role: string | null
    avatar: string | null
    color: string | null
    lastActivity: string | null
    isPrivate: boolean | null
    createdAt: Date
    creatorId: string
    avatarActivityId: string | null
    roles: $Enums.Member_Role
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    role?: boolean
    avatar?: boolean
    color?: boolean
    lastActivity?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    creatorId?: boolean
    avatarActivityId?: boolean
    roles?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    avatarActivity?: boolean | Group$avatarActivityArgs<ExtArgs>
    invitations?: boolean | Group$invitationsArgs<ExtArgs>
    joinRequests?: boolean | Group$joinRequestsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    role?: boolean
    avatar?: boolean
    color?: boolean
    lastActivity?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    creatorId?: boolean
    avatarActivityId?: boolean
    roles?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    avatarActivity?: boolean | Group$avatarActivityArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    role?: boolean
    avatar?: boolean
    color?: boolean
    lastActivity?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    creatorId?: boolean
    avatarActivityId?: boolean
    roles?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    avatarActivity?: boolean | Group$avatarActivityArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    role?: boolean
    avatar?: boolean
    color?: boolean
    lastActivity?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    creatorId?: boolean
    avatarActivityId?: boolean
    roles?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "role" | "avatar" | "color" | "lastActivity" | "isPrivate" | "createdAt" | "creatorId" | "avatarActivityId" | "roles", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    avatarActivity?: boolean | Group$avatarActivityArgs<ExtArgs>
    invitations?: boolean | Group$invitationsArgs<ExtArgs>
    joinRequests?: boolean | Group$joinRequestsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    avatarActivity?: boolean | Group$avatarActivityArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    avatarActivity?: boolean | Group$avatarActivityArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$MemberPayload<ExtArgs>[]
      avatarActivity: Prisma.$GroupActivityPayload<ExtArgs> | null
      invitations: Prisma.$GroupInvitationPayload<ExtArgs>[]
      joinRequests: Prisma.$JoinRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      role: string | null
      avatar: string | null
      color: string | null
      lastActivity: string | null
      isPrivate: boolean | null
      createdAt: Date
      creatorId: string
      avatarActivityId: string | null
      roles: $Enums.Member_Role
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avatarActivity<T extends Group$avatarActivityArgs<ExtArgs> = {}>(args?: Subset<T, Group$avatarActivityArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitations<T extends Group$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Group$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinRequests<T extends Group$joinRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Group$joinRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly role: FieldRef<"Group", 'String'>
    readonly avatar: FieldRef<"Group", 'String'>
    readonly color: FieldRef<"Group", 'String'>
    readonly lastActivity: FieldRef<"Group", 'String'>
    readonly isPrivate: FieldRef<"Group", 'Boolean'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly creatorId: FieldRef<"Group", 'String'>
    readonly avatarActivityId: FieldRef<"Group", 'String'>
    readonly roles: FieldRef<"Group", 'Member_Role'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Group.avatarActivity
   */
  export type Group$avatarActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    where?: GroupActivityWhereInput
  }

  /**
   * Group.invitations
   */
  export type Group$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    cursor?: GroupInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * Group.joinRequests
   */
  export type Group$joinRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    cursor?: JoinRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    joinedAt: Date | null
    role: $Enums.Member_Role | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    groupId: string | null
    joinedAt: Date | null
    role: $Enums.Member_Role | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    userId: number
    groupId: number
    joinedAt: number
    role: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    joinedAt?: true
    role?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    joinedAt?: true
    role?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    userId?: true
    groupId?: true
    joinedAt?: true
    role?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    userId: string
    groupId: string
    joinedAt: Date
    role: $Enums.Member_Role
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    role?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    userId?: boolean
    groupId?: boolean
    joinedAt?: boolean
    role?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "groupId" | "joinedAt" | "role", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      groupId: string
      joinedAt: Date
      role: $Enums.Member_Role
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly userId: FieldRef<"Member", 'String'>
    readonly groupId: FieldRef<"Member", 'String'>
    readonly joinedAt: FieldRef<"Member", 'DateTime'>
    readonly role: FieldRef<"Member", 'Member_Role'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model GroupActivity
   */

  export type AggregateGroupActivity = {
    _count: GroupActivityCountAggregateOutputType | null
    _min: GroupActivityMinAggregateOutputType | null
    _max: GroupActivityMaxAggregateOutputType | null
  }

  export type GroupActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    target: string | null
    activityType: string | null
    time: Date | null
  }

  export type GroupActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    target: string | null
    activityType: string | null
    time: Date | null
  }

  export type GroupActivityCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    target: number
    activityType: number
    time: number
    _all: number
  }


  export type GroupActivityMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    target?: true
    activityType?: true
    time?: true
  }

  export type GroupActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    target?: true
    activityType?: true
    time?: true
  }

  export type GroupActivityCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    target?: true
    activityType?: true
    time?: true
    _all?: true
  }

  export type GroupActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupActivity to aggregate.
     */
    where?: GroupActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupActivities to fetch.
     */
    orderBy?: GroupActivityOrderByWithRelationInput | GroupActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupActivities
    **/
    _count?: true | GroupActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupActivityMaxAggregateInputType
  }

  export type GetGroupActivityAggregateType<T extends GroupActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupActivity[P]>
      : GetScalarType<T[P], AggregateGroupActivity[P]>
  }




  export type GroupActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupActivityWhereInput
    orderBy?: GroupActivityOrderByWithAggregationInput | GroupActivityOrderByWithAggregationInput[]
    by: GroupActivityScalarFieldEnum[] | GroupActivityScalarFieldEnum
    having?: GroupActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupActivityCountAggregateInputType | true
    _min?: GroupActivityMinAggregateInputType
    _max?: GroupActivityMaxAggregateInputType
  }

  export type GroupActivityGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    target: string | null
    activityType: string | null
    time: Date
    _count: GroupActivityCountAggregateOutputType | null
    _min: GroupActivityMinAggregateOutputType | null
    _max: GroupActivityMaxAggregateOutputType | null
  }

  type GetGroupActivityGroupByPayload<T extends GroupActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupActivityGroupByOutputType[P]>
            : GetScalarType<T[P], GroupActivityGroupByOutputType[P]>
        }
      >
    >


  export type GroupActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    target?: boolean
    activityType?: boolean
    time?: boolean
    user?: boolean | GroupActivity$userArgs<ExtArgs>
    groups?: boolean | GroupActivity$groupsArgs<ExtArgs>
    _count?: boolean | GroupActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupActivity"]>

  export type GroupActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    target?: boolean
    activityType?: boolean
    time?: boolean
    user?: boolean | GroupActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["groupActivity"]>

  export type GroupActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    target?: boolean
    activityType?: boolean
    time?: boolean
    user?: boolean | GroupActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["groupActivity"]>

  export type GroupActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    target?: boolean
    activityType?: boolean
    time?: boolean
  }

  export type GroupActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "target" | "activityType" | "time", ExtArgs["result"]["groupActivity"]>
  export type GroupActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | GroupActivity$userArgs<ExtArgs>
    groups?: boolean | GroupActivity$groupsArgs<ExtArgs>
    _count?: boolean | GroupActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | GroupActivity$userArgs<ExtArgs>
  }
  export type GroupActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | GroupActivity$userArgs<ExtArgs>
  }

  export type $GroupActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      target: string | null
      activityType: string | null
      time: Date
    }, ExtArgs["result"]["groupActivity"]>
    composites: {}
  }

  type GroupActivityGetPayload<S extends boolean | null | undefined | GroupActivityDefaultArgs> = $Result.GetResult<Prisma.$GroupActivityPayload, S>

  type GroupActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupActivityCountAggregateInputType | true
    }

  export interface GroupActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupActivity'], meta: { name: 'GroupActivity' } }
    /**
     * Find zero or one GroupActivity that matches the filter.
     * @param {GroupActivityFindUniqueArgs} args - Arguments to find a GroupActivity
     * @example
     * // Get one GroupActivity
     * const groupActivity = await prisma.groupActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupActivityFindUniqueArgs>(args: SelectSubset<T, GroupActivityFindUniqueArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupActivityFindUniqueOrThrowArgs} args - Arguments to find a GroupActivity
     * @example
     * // Get one GroupActivity
     * const groupActivity = await prisma.groupActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityFindFirstArgs} args - Arguments to find a GroupActivity
     * @example
     * // Get one GroupActivity
     * const groupActivity = await prisma.groupActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupActivityFindFirstArgs>(args?: SelectSubset<T, GroupActivityFindFirstArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityFindFirstOrThrowArgs} args - Arguments to find a GroupActivity
     * @example
     * // Get one GroupActivity
     * const groupActivity = await prisma.groupActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupActivities
     * const groupActivities = await prisma.groupActivity.findMany()
     * 
     * // Get first 10 GroupActivities
     * const groupActivities = await prisma.groupActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupActivityWithIdOnly = await prisma.groupActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupActivityFindManyArgs>(args?: SelectSubset<T, GroupActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupActivity.
     * @param {GroupActivityCreateArgs} args - Arguments to create a GroupActivity.
     * @example
     * // Create one GroupActivity
     * const GroupActivity = await prisma.groupActivity.create({
     *   data: {
     *     // ... data to create a GroupActivity
     *   }
     * })
     * 
     */
    create<T extends GroupActivityCreateArgs>(args: SelectSubset<T, GroupActivityCreateArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupActivities.
     * @param {GroupActivityCreateManyArgs} args - Arguments to create many GroupActivities.
     * @example
     * // Create many GroupActivities
     * const groupActivity = await prisma.groupActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupActivityCreateManyArgs>(args?: SelectSubset<T, GroupActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupActivities and returns the data saved in the database.
     * @param {GroupActivityCreateManyAndReturnArgs} args - Arguments to create many GroupActivities.
     * @example
     * // Create many GroupActivities
     * const groupActivity = await prisma.groupActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupActivities and only return the `id`
     * const groupActivityWithIdOnly = await prisma.groupActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupActivity.
     * @param {GroupActivityDeleteArgs} args - Arguments to delete one GroupActivity.
     * @example
     * // Delete one GroupActivity
     * const GroupActivity = await prisma.groupActivity.delete({
     *   where: {
     *     // ... filter to delete one GroupActivity
     *   }
     * })
     * 
     */
    delete<T extends GroupActivityDeleteArgs>(args: SelectSubset<T, GroupActivityDeleteArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupActivity.
     * @param {GroupActivityUpdateArgs} args - Arguments to update one GroupActivity.
     * @example
     * // Update one GroupActivity
     * const groupActivity = await prisma.groupActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupActivityUpdateArgs>(args: SelectSubset<T, GroupActivityUpdateArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupActivities.
     * @param {GroupActivityDeleteManyArgs} args - Arguments to filter GroupActivities to delete.
     * @example
     * // Delete a few GroupActivities
     * const { count } = await prisma.groupActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupActivityDeleteManyArgs>(args?: SelectSubset<T, GroupActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupActivities
     * const groupActivity = await prisma.groupActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupActivityUpdateManyArgs>(args: SelectSubset<T, GroupActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupActivities and returns the data updated in the database.
     * @param {GroupActivityUpdateManyAndReturnArgs} args - Arguments to update many GroupActivities.
     * @example
     * // Update many GroupActivities
     * const groupActivity = await prisma.groupActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupActivities and only return the `id`
     * const groupActivityWithIdOnly = await prisma.groupActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupActivity.
     * @param {GroupActivityUpsertArgs} args - Arguments to update or create a GroupActivity.
     * @example
     * // Update or create a GroupActivity
     * const groupActivity = await prisma.groupActivity.upsert({
     *   create: {
     *     // ... data to create a GroupActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupActivity we want to update
     *   }
     * })
     */
    upsert<T extends GroupActivityUpsertArgs>(args: SelectSubset<T, GroupActivityUpsertArgs<ExtArgs>>): Prisma__GroupActivityClient<$Result.GetResult<Prisma.$GroupActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityCountArgs} args - Arguments to filter GroupActivities to count.
     * @example
     * // Count the number of GroupActivities
     * const count = await prisma.groupActivity.count({
     *   where: {
     *     // ... the filter for the GroupActivities we want to count
     *   }
     * })
    **/
    count<T extends GroupActivityCountArgs>(
      args?: Subset<T, GroupActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupActivityAggregateArgs>(args: Subset<T, GroupActivityAggregateArgs>): Prisma.PrismaPromise<GetGroupActivityAggregateType<T>>

    /**
     * Group by GroupActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupActivityGroupByArgs} args - Group by arguments.
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
      T extends GroupActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupActivityGroupByArgs['orderBy'] }
        : { orderBy?: GroupActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupActivity model
   */
  readonly fields: GroupActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends GroupActivity$userArgs<ExtArgs> = {}>(args?: Subset<T, GroupActivity$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groups<T extends GroupActivity$groupsArgs<ExtArgs> = {}>(args?: Subset<T, GroupActivity$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GroupActivity model
   */
  interface GroupActivityFieldRefs {
    readonly id: FieldRef<"GroupActivity", 'String'>
    readonly userId: FieldRef<"GroupActivity", 'String'>
    readonly action: FieldRef<"GroupActivity", 'String'>
    readonly target: FieldRef<"GroupActivity", 'String'>
    readonly activityType: FieldRef<"GroupActivity", 'String'>
    readonly time: FieldRef<"GroupActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupActivity findUnique
   */
  export type GroupActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * Filter, which GroupActivity to fetch.
     */
    where: GroupActivityWhereUniqueInput
  }

  /**
   * GroupActivity findUniqueOrThrow
   */
  export type GroupActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * Filter, which GroupActivity to fetch.
     */
    where: GroupActivityWhereUniqueInput
  }

  /**
   * GroupActivity findFirst
   */
  export type GroupActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * Filter, which GroupActivity to fetch.
     */
    where?: GroupActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupActivities to fetch.
     */
    orderBy?: GroupActivityOrderByWithRelationInput | GroupActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupActivities.
     */
    cursor?: GroupActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupActivities.
     */
    distinct?: GroupActivityScalarFieldEnum | GroupActivityScalarFieldEnum[]
  }

  /**
   * GroupActivity findFirstOrThrow
   */
  export type GroupActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * Filter, which GroupActivity to fetch.
     */
    where?: GroupActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupActivities to fetch.
     */
    orderBy?: GroupActivityOrderByWithRelationInput | GroupActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupActivities.
     */
    cursor?: GroupActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupActivities.
     */
    distinct?: GroupActivityScalarFieldEnum | GroupActivityScalarFieldEnum[]
  }

  /**
   * GroupActivity findMany
   */
  export type GroupActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * Filter, which GroupActivities to fetch.
     */
    where?: GroupActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupActivities to fetch.
     */
    orderBy?: GroupActivityOrderByWithRelationInput | GroupActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupActivities.
     */
    cursor?: GroupActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupActivities.
     */
    skip?: number
    distinct?: GroupActivityScalarFieldEnum | GroupActivityScalarFieldEnum[]
  }

  /**
   * GroupActivity create
   */
  export type GroupActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupActivity.
     */
    data: XOR<GroupActivityCreateInput, GroupActivityUncheckedCreateInput>
  }

  /**
   * GroupActivity createMany
   */
  export type GroupActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupActivities.
     */
    data: GroupActivityCreateManyInput | GroupActivityCreateManyInput[]
  }

  /**
   * GroupActivity createManyAndReturn
   */
  export type GroupActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * The data used to create many GroupActivities.
     */
    data: GroupActivityCreateManyInput | GroupActivityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupActivity update
   */
  export type GroupActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupActivity.
     */
    data: XOR<GroupActivityUpdateInput, GroupActivityUncheckedUpdateInput>
    /**
     * Choose, which GroupActivity to update.
     */
    where: GroupActivityWhereUniqueInput
  }

  /**
   * GroupActivity updateMany
   */
  export type GroupActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupActivities.
     */
    data: XOR<GroupActivityUpdateManyMutationInput, GroupActivityUncheckedUpdateManyInput>
    /**
     * Filter which GroupActivities to update
     */
    where?: GroupActivityWhereInput
    /**
     * Limit how many GroupActivities to update.
     */
    limit?: number
  }

  /**
   * GroupActivity updateManyAndReturn
   */
  export type GroupActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * The data used to update GroupActivities.
     */
    data: XOR<GroupActivityUpdateManyMutationInput, GroupActivityUncheckedUpdateManyInput>
    /**
     * Filter which GroupActivities to update
     */
    where?: GroupActivityWhereInput
    /**
     * Limit how many GroupActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupActivity upsert
   */
  export type GroupActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupActivity to update in case it exists.
     */
    where: GroupActivityWhereUniqueInput
    /**
     * In case the GroupActivity found by the `where` argument doesn't exist, create a new GroupActivity with this data.
     */
    create: XOR<GroupActivityCreateInput, GroupActivityUncheckedCreateInput>
    /**
     * In case the GroupActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupActivityUpdateInput, GroupActivityUncheckedUpdateInput>
  }

  /**
   * GroupActivity delete
   */
  export type GroupActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
    /**
     * Filter which GroupActivity to delete.
     */
    where: GroupActivityWhereUniqueInput
  }

  /**
   * GroupActivity deleteMany
   */
  export type GroupActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupActivities to delete
     */
    where?: GroupActivityWhereInput
    /**
     * Limit how many GroupActivities to delete.
     */
    limit?: number
  }

  /**
   * GroupActivity.user
   */
  export type GroupActivity$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * GroupActivity.groups
   */
  export type GroupActivity$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * GroupActivity without action
   */
  export type GroupActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupActivity
     */
    select?: GroupActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupActivity
     */
    omit?: GroupActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupActivityInclude<ExtArgs> | null
  }


  /**
   * Model GroupInvitation
   */

  export type AggregateGroupInvitation = {
    _count: GroupInvitationCountAggregateOutputType | null
    _min: GroupInvitationMinAggregateOutputType | null
    _max: GroupInvitationMaxAggregateOutputType | null
  }

  export type GroupInvitationMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    invitedUserId: string | null
    invitedById: string | null
    roleId: string | null
    status: string | null
    createdAt: Date | null
    respondedAt: Date | null
  }

  export type GroupInvitationMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    invitedUserId: string | null
    invitedById: string | null
    roleId: string | null
    status: string | null
    createdAt: Date | null
    respondedAt: Date | null
  }

  export type GroupInvitationCountAggregateOutputType = {
    id: number
    groupId: number
    invitedUserId: number
    invitedById: number
    roleId: number
    status: number
    createdAt: number
    respondedAt: number
    _all: number
  }


  export type GroupInvitationMinAggregateInputType = {
    id?: true
    groupId?: true
    invitedUserId?: true
    invitedById?: true
    roleId?: true
    status?: true
    createdAt?: true
    respondedAt?: true
  }

  export type GroupInvitationMaxAggregateInputType = {
    id?: true
    groupId?: true
    invitedUserId?: true
    invitedById?: true
    roleId?: true
    status?: true
    createdAt?: true
    respondedAt?: true
  }

  export type GroupInvitationCountAggregateInputType = {
    id?: true
    groupId?: true
    invitedUserId?: true
    invitedById?: true
    roleId?: true
    status?: true
    createdAt?: true
    respondedAt?: true
    _all?: true
  }

  export type GroupInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupInvitation to aggregate.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupInvitations
    **/
    _count?: true | GroupInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupInvitationMaxAggregateInputType
  }

  export type GetGroupInvitationAggregateType<T extends GroupInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupInvitation[P]>
      : GetScalarType<T[P], AggregateGroupInvitation[P]>
  }




  export type GroupInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupInvitationWhereInput
    orderBy?: GroupInvitationOrderByWithAggregationInput | GroupInvitationOrderByWithAggregationInput[]
    by: GroupInvitationScalarFieldEnum[] | GroupInvitationScalarFieldEnum
    having?: GroupInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupInvitationCountAggregateInputType | true
    _min?: GroupInvitationMinAggregateInputType
    _max?: GroupInvitationMaxAggregateInputType
  }

  export type GroupInvitationGroupByOutputType = {
    id: string
    groupId: string
    invitedUserId: string
    invitedById: string
    roleId: string | null
    status: string
    createdAt: Date
    respondedAt: Date | null
    _count: GroupInvitationCountAggregateOutputType | null
    _min: GroupInvitationMinAggregateOutputType | null
    _max: GroupInvitationMaxAggregateOutputType | null
  }

  type GetGroupInvitationGroupByPayload<T extends GroupInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], GroupInvitationGroupByOutputType[P]>
        }
      >
    >


  export type GroupInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    roleId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    invitedUser?: boolean | UserDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupInvitation"]>

  export type GroupInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    roleId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    invitedUser?: boolean | UserDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupInvitation"]>

  export type GroupInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    roleId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    invitedUser?: boolean | UserDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupInvitation"]>

  export type GroupInvitationSelectScalar = {
    id?: boolean
    groupId?: boolean
    invitedUserId?: boolean
    invitedById?: boolean
    roleId?: boolean
    status?: boolean
    createdAt?: boolean
    respondedAt?: boolean
  }

  export type GroupInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "invitedUserId" | "invitedById" | "roleId" | "status" | "createdAt" | "respondedAt", ExtArgs["result"]["groupInvitation"]>
  export type GroupInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    invitedUser?: boolean | UserDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    invitedUser?: boolean | UserDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    invitedUser?: boolean | UserDefaultArgs<ExtArgs>
    invitedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupInvitation"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      invitedUser: Prisma.$UserPayload<ExtArgs>
      invitedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      invitedUserId: string
      invitedById: string
      roleId: string | null
      status: string
      createdAt: Date
      respondedAt: Date | null
    }, ExtArgs["result"]["groupInvitation"]>
    composites: {}
  }

  type GroupInvitationGetPayload<S extends boolean | null | undefined | GroupInvitationDefaultArgs> = $Result.GetResult<Prisma.$GroupInvitationPayload, S>

  type GroupInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupInvitationCountAggregateInputType | true
    }

  export interface GroupInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupInvitation'], meta: { name: 'GroupInvitation' } }
    /**
     * Find zero or one GroupInvitation that matches the filter.
     * @param {GroupInvitationFindUniqueArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupInvitationFindUniqueArgs>(args: SelectSubset<T, GroupInvitationFindUniqueArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupInvitationFindUniqueOrThrowArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationFindFirstArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupInvitationFindFirstArgs>(args?: SelectSubset<T, GroupInvitationFindFirstArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationFindFirstOrThrowArgs} args - Arguments to find a GroupInvitation
     * @example
     * // Get one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupInvitations
     * const groupInvitations = await prisma.groupInvitation.findMany()
     * 
     * // Get first 10 GroupInvitations
     * const groupInvitations = await prisma.groupInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupInvitationWithIdOnly = await prisma.groupInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupInvitationFindManyArgs>(args?: SelectSubset<T, GroupInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupInvitation.
     * @param {GroupInvitationCreateArgs} args - Arguments to create a GroupInvitation.
     * @example
     * // Create one GroupInvitation
     * const GroupInvitation = await prisma.groupInvitation.create({
     *   data: {
     *     // ... data to create a GroupInvitation
     *   }
     * })
     * 
     */
    create<T extends GroupInvitationCreateArgs>(args: SelectSubset<T, GroupInvitationCreateArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupInvitations.
     * @param {GroupInvitationCreateManyArgs} args - Arguments to create many GroupInvitations.
     * @example
     * // Create many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupInvitationCreateManyArgs>(args?: SelectSubset<T, GroupInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupInvitations and returns the data saved in the database.
     * @param {GroupInvitationCreateManyAndReturnArgs} args - Arguments to create many GroupInvitations.
     * @example
     * // Create many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupInvitations and only return the `id`
     * const groupInvitationWithIdOnly = await prisma.groupInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupInvitation.
     * @param {GroupInvitationDeleteArgs} args - Arguments to delete one GroupInvitation.
     * @example
     * // Delete one GroupInvitation
     * const GroupInvitation = await prisma.groupInvitation.delete({
     *   where: {
     *     // ... filter to delete one GroupInvitation
     *   }
     * })
     * 
     */
    delete<T extends GroupInvitationDeleteArgs>(args: SelectSubset<T, GroupInvitationDeleteArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupInvitation.
     * @param {GroupInvitationUpdateArgs} args - Arguments to update one GroupInvitation.
     * @example
     * // Update one GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupInvitationUpdateArgs>(args: SelectSubset<T, GroupInvitationUpdateArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupInvitations.
     * @param {GroupInvitationDeleteManyArgs} args - Arguments to filter GroupInvitations to delete.
     * @example
     * // Delete a few GroupInvitations
     * const { count } = await prisma.groupInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupInvitationDeleteManyArgs>(args?: SelectSubset<T, GroupInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupInvitationUpdateManyArgs>(args: SelectSubset<T, GroupInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupInvitations and returns the data updated in the database.
     * @param {GroupInvitationUpdateManyAndReturnArgs} args - Arguments to update many GroupInvitations.
     * @example
     * // Update many GroupInvitations
     * const groupInvitation = await prisma.groupInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupInvitations and only return the `id`
     * const groupInvitationWithIdOnly = await prisma.groupInvitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupInvitation.
     * @param {GroupInvitationUpsertArgs} args - Arguments to update or create a GroupInvitation.
     * @example
     * // Update or create a GroupInvitation
     * const groupInvitation = await prisma.groupInvitation.upsert({
     *   create: {
     *     // ... data to create a GroupInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupInvitation we want to update
     *   }
     * })
     */
    upsert<T extends GroupInvitationUpsertArgs>(args: SelectSubset<T, GroupInvitationUpsertArgs<ExtArgs>>): Prisma__GroupInvitationClient<$Result.GetResult<Prisma.$GroupInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationCountArgs} args - Arguments to filter GroupInvitations to count.
     * @example
     * // Count the number of GroupInvitations
     * const count = await prisma.groupInvitation.count({
     *   where: {
     *     // ... the filter for the GroupInvitations we want to count
     *   }
     * })
    **/
    count<T extends GroupInvitationCountArgs>(
      args?: Subset<T, GroupInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupInvitationAggregateArgs>(args: Subset<T, GroupInvitationAggregateArgs>): Prisma.PrismaPromise<GetGroupInvitationAggregateType<T>>

    /**
     * Group by GroupInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupInvitationGroupByArgs} args - Group by arguments.
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
      T extends GroupInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupInvitationGroupByArgs['orderBy'] }
        : { orderBy?: GroupInvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupInvitation model
   */
  readonly fields: GroupInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupInvitation model
   */
  interface GroupInvitationFieldRefs {
    readonly id: FieldRef<"GroupInvitation", 'String'>
    readonly groupId: FieldRef<"GroupInvitation", 'String'>
    readonly invitedUserId: FieldRef<"GroupInvitation", 'String'>
    readonly invitedById: FieldRef<"GroupInvitation", 'String'>
    readonly roleId: FieldRef<"GroupInvitation", 'String'>
    readonly status: FieldRef<"GroupInvitation", 'String'>
    readonly createdAt: FieldRef<"GroupInvitation", 'DateTime'>
    readonly respondedAt: FieldRef<"GroupInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupInvitation findUnique
   */
  export type GroupInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation findUniqueOrThrow
   */
  export type GroupInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation findFirst
   */
  export type GroupInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupInvitations.
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupInvitations.
     */
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * GroupInvitation findFirstOrThrow
   */
  export type GroupInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitation to fetch.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupInvitations.
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupInvitations.
     */
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * GroupInvitation findMany
   */
  export type GroupInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter, which GroupInvitations to fetch.
     */
    where?: GroupInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupInvitations to fetch.
     */
    orderBy?: GroupInvitationOrderByWithRelationInput | GroupInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupInvitations.
     */
    cursor?: GroupInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupInvitations.
     */
    skip?: number
    distinct?: GroupInvitationScalarFieldEnum | GroupInvitationScalarFieldEnum[]
  }

  /**
   * GroupInvitation create
   */
  export type GroupInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupInvitation.
     */
    data: XOR<GroupInvitationCreateInput, GroupInvitationUncheckedCreateInput>
  }

  /**
   * GroupInvitation createMany
   */
  export type GroupInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupInvitations.
     */
    data: GroupInvitationCreateManyInput | GroupInvitationCreateManyInput[]
  }

  /**
   * GroupInvitation createManyAndReturn
   */
  export type GroupInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many GroupInvitations.
     */
    data: GroupInvitationCreateManyInput | GroupInvitationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupInvitation update
   */
  export type GroupInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupInvitation.
     */
    data: XOR<GroupInvitationUpdateInput, GroupInvitationUncheckedUpdateInput>
    /**
     * Choose, which GroupInvitation to update.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation updateMany
   */
  export type GroupInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupInvitations.
     */
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyInput>
    /**
     * Filter which GroupInvitations to update
     */
    where?: GroupInvitationWhereInput
    /**
     * Limit how many GroupInvitations to update.
     */
    limit?: number
  }

  /**
   * GroupInvitation updateManyAndReturn
   */
  export type GroupInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * The data used to update GroupInvitations.
     */
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyInput>
    /**
     * Filter which GroupInvitations to update
     */
    where?: GroupInvitationWhereInput
    /**
     * Limit how many GroupInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupInvitation upsert
   */
  export type GroupInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupInvitation to update in case it exists.
     */
    where: GroupInvitationWhereUniqueInput
    /**
     * In case the GroupInvitation found by the `where` argument doesn't exist, create a new GroupInvitation with this data.
     */
    create: XOR<GroupInvitationCreateInput, GroupInvitationUncheckedCreateInput>
    /**
     * In case the GroupInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupInvitationUpdateInput, GroupInvitationUncheckedUpdateInput>
  }

  /**
   * GroupInvitation delete
   */
  export type GroupInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
    /**
     * Filter which GroupInvitation to delete.
     */
    where: GroupInvitationWhereUniqueInput
  }

  /**
   * GroupInvitation deleteMany
   */
  export type GroupInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupInvitations to delete
     */
    where?: GroupInvitationWhereInput
    /**
     * Limit how many GroupInvitations to delete.
     */
    limit?: number
  }

  /**
   * GroupInvitation without action
   */
  export type GroupInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupInvitation
     */
    select?: GroupInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupInvitation
     */
    omit?: GroupInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInvitationInclude<ExtArgs> | null
  }


  /**
   * Model JoinRequest
   */

  export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  export type JoinRequestMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    decidedAt: Date | null
  }

  export type JoinRequestMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    decidedAt: Date | null
  }

  export type JoinRequestCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    message: number
    status: number
    createdAt: number
    decidedAt: number
    _all: number
  }


  export type JoinRequestMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    message?: true
    status?: true
    createdAt?: true
    decidedAt?: true
  }

  export type JoinRequestMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    message?: true
    status?: true
    createdAt?: true
    decidedAt?: true
  }

  export type JoinRequestCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    message?: true
    status?: true
    createdAt?: true
    decidedAt?: true
    _all?: true
  }

  export type JoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequest to aggregate.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinRequests
    **/
    _count?: true | JoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinRequestMaxAggregateInputType
  }

  export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinRequest[P]>
      : GetScalarType<T[P], AggregateJoinRequest[P]>
  }




  export type JoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithAggregationInput | JoinRequestOrderByWithAggregationInput[]
    by: JoinRequestScalarFieldEnum[] | JoinRequestScalarFieldEnum
    having?: JoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinRequestCountAggregateInputType | true
    _min?: JoinRequestMinAggregateInputType
    _max?: JoinRequestMaxAggregateInputType
  }

  export type JoinRequestGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    message: string | null
    status: string
    createdAt: Date
    decidedAt: Date | null
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type JoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    decidedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    decidedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    decidedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    decidedAt?: boolean
  }

  export type JoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "message" | "status" | "createdAt" | "decidedAt", ExtArgs["result"]["joinRequest"]>
  export type JoinRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JoinRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JoinRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinRequest"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      message: string | null
      status: string
      createdAt: Date
      decidedAt: Date | null
    }, ExtArgs["result"]["joinRequest"]>
    composites: {}
  }

  type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = $Result.GetResult<Prisma.$JoinRequestPayload, S>

  type JoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinRequestCountAggregateInputType | true
    }

  export interface JoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'], meta: { name: 'JoinRequest' } }
    /**
     * Find zero or one JoinRequest that matches the filter.
     * @param {JoinRequestFindUniqueArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinRequestFindUniqueArgs>(args: SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinRequestFindUniqueOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinRequestFindFirstArgs>(args?: SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany()
     * 
     * // Get first 10 JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinRequestFindManyArgs>(args?: SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinRequest.
     * @param {JoinRequestCreateArgs} args - Arguments to create a JoinRequest.
     * @example
     * // Create one JoinRequest
     * const JoinRequest = await prisma.joinRequest.create({
     *   data: {
     *     // ... data to create a JoinRequest
     *   }
     * })
     * 
     */
    create<T extends JoinRequestCreateArgs>(args: SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinRequests.
     * @param {JoinRequestCreateManyArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinRequestCreateManyArgs>(args?: SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JoinRequests and returns the data saved in the database.
     * @param {JoinRequestCreateManyAndReturnArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, JoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JoinRequest.
     * @param {JoinRequestDeleteArgs} args - Arguments to delete one JoinRequest.
     * @example
     * // Delete one JoinRequest
     * const JoinRequest = await prisma.joinRequest.delete({
     *   where: {
     *     // ... filter to delete one JoinRequest
     *   }
     * })
     * 
     */
    delete<T extends JoinRequestDeleteArgs>(args: SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinRequest.
     * @param {JoinRequestUpdateArgs} args - Arguments to update one JoinRequest.
     * @example
     * // Update one JoinRequest
     * const joinRequest = await prisma.joinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinRequestUpdateArgs>(args: SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinRequests.
     * @param {JoinRequestDeleteManyArgs} args - Arguments to filter JoinRequests to delete.
     * @example
     * // Delete a few JoinRequests
     * const { count } = await prisma.joinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinRequestUpdateManyArgs>(args: SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests and returns the data updated in the database.
     * @param {JoinRequestUpdateManyAndReturnArgs} args - Arguments to update many JoinRequests.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, JoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JoinRequest.
     * @param {JoinRequestUpsertArgs} args - Arguments to update or create a JoinRequest.
     * @example
     * // Update or create a JoinRequest
     * const joinRequest = await prisma.joinRequest.upsert({
     *   create: {
     *     // ... data to create a JoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends JoinRequestUpsertArgs>(args: SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestCountArgs} args - Arguments to filter JoinRequests to count.
     * @example
     * // Count the number of JoinRequests
     * const count = await prisma.joinRequest.count({
     *   where: {
     *     // ... the filter for the JoinRequests we want to count
     *   }
     * })
    **/
    count<T extends JoinRequestCountArgs>(
      args?: Subset<T, JoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JoinRequestAggregateArgs>(args: Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>

    /**
     * Group by JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestGroupByArgs} args - Group by arguments.
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
      T extends JoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: JoinRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinRequest model
   */
  readonly fields: JoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JoinRequest model
   */
  interface JoinRequestFieldRefs {
    readonly id: FieldRef<"JoinRequest", 'String'>
    readonly groupId: FieldRef<"JoinRequest", 'String'>
    readonly userId: FieldRef<"JoinRequest", 'String'>
    readonly message: FieldRef<"JoinRequest", 'String'>
    readonly status: FieldRef<"JoinRequest", 'String'>
    readonly createdAt: FieldRef<"JoinRequest", 'DateTime'>
    readonly decidedAt: FieldRef<"JoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinRequest findUnique
   */
  export type JoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findUniqueOrThrow
   */
  export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findFirst
   */
  export type JoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findFirstOrThrow
   */
  export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findMany
   */
  export type JoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter, which JoinRequests to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest create
   */
  export type JoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a JoinRequest.
     */
    data: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
  }

  /**
   * JoinRequest createMany
   */
  export type JoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
  }

  /**
   * JoinRequest createManyAndReturn
   */
  export type JoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinRequest update
   */
  export type JoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a JoinRequest.
     */
    data: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
    /**
     * Choose, which JoinRequest to update.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest updateMany
   */
  export type JoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest updateManyAndReturn
   */
  export type JoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JoinRequest upsert
   */
  export type JoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the JoinRequest to update in case it exists.
     */
    where: JoinRequestWhereUniqueInput
    /**
     * In case the JoinRequest found by the `where` argument doesn't exist, create a new JoinRequest with this data.
     */
    create: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
    /**
     * In case the JoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
  }

  /**
   * JoinRequest delete
   */
  export type JoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
    /**
     * Filter which JoinRequest to delete.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest deleteMany
   */
  export type JoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequests to delete
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to delete.
     */
    limit?: number
  }

  /**
   * JoinRequest without action
   */
  export type JoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JoinRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    role: 'role',
    avatar: 'avatar',
    color: 'color',
    lastActivity: 'lastActivity',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    creatorId: 'creatorId',
    avatarActivityId: 'avatarActivityId',
    roles: 'roles'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    groupId: 'groupId',
    joinedAt: 'joinedAt',
    role: 'role'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const GroupActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    target: 'target',
    activityType: 'activityType',
    time: 'time'
  };

  export type GroupActivityScalarFieldEnum = (typeof GroupActivityScalarFieldEnum)[keyof typeof GroupActivityScalarFieldEnum]


  export const GroupInvitationScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    invitedUserId: 'invitedUserId',
    invitedById: 'invitedById',
    roleId: 'roleId',
    status: 'status',
    createdAt: 'createdAt',
    respondedAt: 'respondedAt'
  };

  export type GroupInvitationScalarFieldEnum = (typeof GroupInvitationScalarFieldEnum)[keyof typeof GroupInvitationScalarFieldEnum]


  export const JoinRequestScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    decidedAt: 'decidedAt'
  };

  export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Member_Role'
   */
  export type EnumMember_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Member_Role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    group?: GroupListRelationFilter
    memberships?: MemberListRelationFilter
    groupActivities?: GroupActivityListRelationFilter
    invitations?: GroupInvitationListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    GroupInvitation?: GroupInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    group?: GroupOrderByRelationAggregateInput
    memberships?: MemberOrderByRelationAggregateInput
    groupActivities?: GroupActivityOrderByRelationAggregateInput
    invitations?: GroupInvitationOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
    GroupInvitation?: GroupInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    group?: GroupListRelationFilter
    memberships?: MemberListRelationFilter
    groupActivities?: GroupActivityListRelationFilter
    invitations?: GroupInvitationListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
    GroupInvitation?: GroupInvitationListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    role?: StringNullableFilter<"Group"> | string | null
    avatar?: StringNullableFilter<"Group"> | string | null
    color?: StringNullableFilter<"Group"> | string | null
    lastActivity?: StringNullableFilter<"Group"> | string | null
    isPrivate?: BoolNullableFilter<"Group"> | boolean | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    creatorId?: StringFilter<"Group"> | string
    avatarActivityId?: StringNullableFilter<"Group"> | string | null
    roles?: EnumMember_RoleFilter<"Group"> | $Enums.Member_Role
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: MemberListRelationFilter
    avatarActivity?: XOR<GroupActivityNullableScalarRelationFilter, GroupActivityWhereInput> | null
    invitations?: GroupInvitationListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    lastActivity?: SortOrderInput | SortOrder
    isPrivate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    avatarActivityId?: SortOrderInput | SortOrder
    roles?: SortOrder
    creator?: UserOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
    avatarActivity?: GroupActivityOrderByWithRelationInput
    invitations?: GroupInvitationOrderByRelationAggregateInput
    joinRequests?: JoinRequestOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    role?: StringNullableFilter<"Group"> | string | null
    avatar?: StringNullableFilter<"Group"> | string | null
    color?: StringNullableFilter<"Group"> | string | null
    lastActivity?: StringNullableFilter<"Group"> | string | null
    isPrivate?: BoolNullableFilter<"Group"> | boolean | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    creatorId?: StringFilter<"Group"> | string
    avatarActivityId?: StringNullableFilter<"Group"> | string | null
    roles?: EnumMember_RoleFilter<"Group"> | $Enums.Member_Role
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: MemberListRelationFilter
    avatarActivity?: XOR<GroupActivityNullableScalarRelationFilter, GroupActivityWhereInput> | null
    invitations?: GroupInvitationListRelationFilter
    joinRequests?: JoinRequestListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    lastActivity?: SortOrderInput | SortOrder
    isPrivate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    avatarActivityId?: SortOrderInput | SortOrder
    roles?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    role?: StringNullableWithAggregatesFilter<"Group"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Group"> | string | null
    color?: StringNullableWithAggregatesFilter<"Group"> | string | null
    lastActivity?: StringNullableWithAggregatesFilter<"Group"> | string | null
    isPrivate?: BoolNullableWithAggregatesFilter<"Group"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    creatorId?: StringWithAggregatesFilter<"Group"> | string
    avatarActivityId?: StringNullableWithAggregatesFilter<"Group"> | string | null
    roles?: EnumMember_RoleWithAggregatesFilter<"Group"> | $Enums.Member_Role
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    userId?: StringFilter<"Member"> | string
    groupId?: StringFilter<"Member"> | string
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    role?: EnumMember_RoleFilter<"Member"> | $Enums.Member_Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_groupId?: MemberUserIdGroupIdCompoundUniqueInput
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    userId?: StringFilter<"Member"> | string
    groupId?: StringFilter<"Member"> | string
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    role?: EnumMember_RoleFilter<"Member"> | $Enums.Member_Role
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "userId_groupId">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    userId?: StringWithAggregatesFilter<"Member"> | string
    groupId?: StringWithAggregatesFilter<"Member"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    role?: EnumMember_RoleWithAggregatesFilter<"Member"> | $Enums.Member_Role
  }

  export type GroupActivityWhereInput = {
    AND?: GroupActivityWhereInput | GroupActivityWhereInput[]
    OR?: GroupActivityWhereInput[]
    NOT?: GroupActivityWhereInput | GroupActivityWhereInput[]
    id?: StringFilter<"GroupActivity"> | string
    userId?: StringNullableFilter<"GroupActivity"> | string | null
    action?: StringFilter<"GroupActivity"> | string
    target?: StringNullableFilter<"GroupActivity"> | string | null
    activityType?: StringNullableFilter<"GroupActivity"> | string | null
    time?: DateTimeFilter<"GroupActivity"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    groups?: GroupListRelationFilter
  }

  export type GroupActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    target?: SortOrderInput | SortOrder
    activityType?: SortOrderInput | SortOrder
    time?: SortOrder
    user?: UserOrderByWithRelationInput
    groups?: GroupOrderByRelationAggregateInput
  }

  export type GroupActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupActivityWhereInput | GroupActivityWhereInput[]
    OR?: GroupActivityWhereInput[]
    NOT?: GroupActivityWhereInput | GroupActivityWhereInput[]
    userId?: StringNullableFilter<"GroupActivity"> | string | null
    action?: StringFilter<"GroupActivity"> | string
    target?: StringNullableFilter<"GroupActivity"> | string | null
    activityType?: StringNullableFilter<"GroupActivity"> | string | null
    time?: DateTimeFilter<"GroupActivity"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    groups?: GroupListRelationFilter
  }, "id">

  export type GroupActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    target?: SortOrderInput | SortOrder
    activityType?: SortOrderInput | SortOrder
    time?: SortOrder
    _count?: GroupActivityCountOrderByAggregateInput
    _max?: GroupActivityMaxOrderByAggregateInput
    _min?: GroupActivityMinOrderByAggregateInput
  }

  export type GroupActivityScalarWhereWithAggregatesInput = {
    AND?: GroupActivityScalarWhereWithAggregatesInput | GroupActivityScalarWhereWithAggregatesInput[]
    OR?: GroupActivityScalarWhereWithAggregatesInput[]
    NOT?: GroupActivityScalarWhereWithAggregatesInput | GroupActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupActivity"> | string
    userId?: StringNullableWithAggregatesFilter<"GroupActivity"> | string | null
    action?: StringWithAggregatesFilter<"GroupActivity"> | string
    target?: StringNullableWithAggregatesFilter<"GroupActivity"> | string | null
    activityType?: StringNullableWithAggregatesFilter<"GroupActivity"> | string | null
    time?: DateTimeWithAggregatesFilter<"GroupActivity"> | Date | string
  }

  export type GroupInvitationWhereInput = {
    AND?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    OR?: GroupInvitationWhereInput[]
    NOT?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    id?: StringFilter<"GroupInvitation"> | string
    groupId?: StringFilter<"GroupInvitation"> | string
    invitedUserId?: StringFilter<"GroupInvitation"> | string
    invitedById?: StringFilter<"GroupInvitation"> | string
    roleId?: StringNullableFilter<"GroupInvitation"> | string | null
    status?: StringFilter<"GroupInvitation"> | string
    createdAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    respondedAt?: DateTimeNullableFilter<"GroupInvitation"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    invitedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GroupInvitationOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    roleId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    invitedUser?: UserOrderByWithRelationInput
    invitedBy?: UserOrderByWithRelationInput
  }

  export type GroupInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    OR?: GroupInvitationWhereInput[]
    NOT?: GroupInvitationWhereInput | GroupInvitationWhereInput[]
    groupId?: StringFilter<"GroupInvitation"> | string
    invitedUserId?: StringFilter<"GroupInvitation"> | string
    invitedById?: StringFilter<"GroupInvitation"> | string
    roleId?: StringNullableFilter<"GroupInvitation"> | string | null
    status?: StringFilter<"GroupInvitation"> | string
    createdAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    respondedAt?: DateTimeNullableFilter<"GroupInvitation"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    invitedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GroupInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    roleId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    _count?: GroupInvitationCountOrderByAggregateInput
    _max?: GroupInvitationMaxOrderByAggregateInput
    _min?: GroupInvitationMinOrderByAggregateInput
  }

  export type GroupInvitationScalarWhereWithAggregatesInput = {
    AND?: GroupInvitationScalarWhereWithAggregatesInput | GroupInvitationScalarWhereWithAggregatesInput[]
    OR?: GroupInvitationScalarWhereWithAggregatesInput[]
    NOT?: GroupInvitationScalarWhereWithAggregatesInput | GroupInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupInvitation"> | string
    groupId?: StringWithAggregatesFilter<"GroupInvitation"> | string
    invitedUserId?: StringWithAggregatesFilter<"GroupInvitation"> | string
    invitedById?: StringWithAggregatesFilter<"GroupInvitation"> | string
    roleId?: StringNullableWithAggregatesFilter<"GroupInvitation"> | string | null
    status?: StringWithAggregatesFilter<"GroupInvitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupInvitation"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"GroupInvitation"> | Date | string | null
  }

  export type JoinRequestWhereInput = {
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    groupId?: StringFilter<"JoinRequest"> | string
    userId?: StringFilter<"JoinRequest"> | string
    message?: StringNullableFilter<"JoinRequest"> | string | null
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    decidedAt?: DateTimeNullableFilter<"JoinRequest"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    groupId?: StringFilter<"JoinRequest"> | string
    userId?: StringFilter<"JoinRequest"> | string
    message?: StringNullableFilter<"JoinRequest"> | string | null
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    decidedAt?: DateTimeNullableFilter<"JoinRequest"> | Date | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrderInput | SortOrder
    _count?: JoinRequestCountOrderByAggregateInput
    _max?: JoinRequestMaxOrderByAggregateInput
    _min?: JoinRequestMinOrderByAggregateInput
  }

  export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    OR?: JoinRequestScalarWhereWithAggregatesInput[]
    NOT?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JoinRequest"> | string
    groupId?: StringWithAggregatesFilter<"JoinRequest"> | string
    userId?: StringWithAggregatesFilter<"JoinRequest"> | string
    message?: StringNullableWithAggregatesFilter<"JoinRequest"> | string | null
    status?: StringWithAggregatesFilter<"JoinRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string
    decidedAt?: DateTimeNullableWithAggregatesFilter<"JoinRequest"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupCreateNestedManyWithoutCreatorInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityUncheckedCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUncheckedUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    roles: $Enums.Member_Role
    creator: UserCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
    avatarActivity?: GroupActivityCreateNestedOneWithoutGroupsInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    creator?: UserUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    avatarActivity?: GroupActivityUpdateOneWithoutGroupsNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type MemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
    user: UserCreateNestedOneWithoutMembershipsInput
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    userId: string
    groupId: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type MemberCreateManyInput = {
    id?: string
    userId: string
    groupId: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type GroupActivityCreateInput = {
    id?: string
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
    user?: UserCreateNestedOneWithoutGroupActivitiesInput
    groups?: GroupCreateNestedManyWithoutAvatarActivityInput
  }

  export type GroupActivityUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutAvatarActivityInput
  }

  export type GroupActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutGroupActivitiesNestedInput
    groups?: GroupUpdateManyWithoutAvatarActivityNestedInput
  }

  export type GroupActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutAvatarActivityNestedInput
  }

  export type GroupActivityCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
  }

  export type GroupActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationCreateInput = {
    id?: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutInvitationsInput
    invitedUser: UserCreateNestedOneWithoutInvitationsInput
    invitedBy: UserCreateNestedOneWithoutGroupInvitationInput
  }

  export type GroupInvitationUncheckedCreateInput = {
    id?: string
    groupId: string
    invitedUserId: string
    invitedById: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutInvitationsNestedInput
    invitedUser?: UserUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: UserUpdateOneRequiredWithoutGroupInvitationNestedInput
  }

  export type GroupInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedUserId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationCreateManyInput = {
    id?: string
    groupId: string
    invitedUserId: string
    invitedById: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedUserId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestCreateInput = {
    id?: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutJoinRequestsInput
    user: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type JoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutJoinRequestsNestedInput
    user?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type JoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type GroupActivityListRelationFilter = {
    every?: GroupActivityWhereInput
    some?: GroupActivityWhereInput
    none?: GroupActivityWhereInput
  }

  export type GroupInvitationListRelationFilter = {
    every?: GroupInvitationWhereInput
    some?: GroupInvitationWhereInput
    none?: GroupInvitationWhereInput
  }

  export type JoinRequestListRelationFilter = {
    every?: JoinRequestWhereInput
    some?: JoinRequestWhereInput
    none?: JoinRequestWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JoinRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumMember_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Member_Role | EnumMember_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.Member_Role[]
    notIn?: $Enums.Member_Role[]
    not?: NestedEnumMember_RoleFilter<$PrismaModel> | $Enums.Member_Role
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupActivityNullableScalarRelationFilter = {
    is?: GroupActivityWhereInput | null
    isNot?: GroupActivityWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    color?: SortOrder
    lastActivity?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    avatarActivityId?: SortOrder
    roles?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    color?: SortOrder
    lastActivity?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    avatarActivityId?: SortOrder
    roles?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    color?: SortOrder
    lastActivity?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    creatorId?: SortOrder
    avatarActivityId?: SortOrder
    roles?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumMember_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Member_Role | EnumMember_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.Member_Role[]
    notIn?: $Enums.Member_Role[]
    not?: NestedEnumMember_RoleWithAggregatesFilter<$PrismaModel> | $Enums.Member_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMember_RoleFilter<$PrismaModel>
    _max?: NestedEnumMember_RoleFilter<$PrismaModel>
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type MemberUserIdGroupIdCompoundUniqueInput = {
    userId: string
    groupId: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    joinedAt?: SortOrder
    role?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GroupActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    activityType?: SortOrder
    time?: SortOrder
  }

  export type GroupActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    activityType?: SortOrder
    time?: SortOrder
  }

  export type GroupActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    target?: SortOrder
    activityType?: SortOrder
    time?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GroupInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type GroupInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type GroupInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    invitedUserId?: SortOrder
    invitedById?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
  }

  export type JoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
  }

  export type JoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
  }

  export type GroupCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type GroupActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupActivityCreateWithoutUserInput, GroupActivityUncheckedCreateWithoutUserInput> | GroupActivityCreateWithoutUserInput[] | GroupActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupActivityCreateOrConnectWithoutUserInput | GroupActivityCreateOrConnectWithoutUserInput[]
    createMany?: GroupActivityCreateManyUserInputEnvelope
    connect?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
  }

  export type GroupInvitationCreateNestedManyWithoutInvitedUserInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type GroupInvitationCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type GroupActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupActivityCreateWithoutUserInput, GroupActivityUncheckedCreateWithoutUserInput> | GroupActivityCreateWithoutUserInput[] | GroupActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupActivityCreateOrConnectWithoutUserInput | GroupActivityCreateOrConnectWithoutUserInput[]
    createMany?: GroupActivityCreateManyUserInputEnvelope
    connect?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
  }

  export type GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput | GroupUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCreatorInput | GroupUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput | GroupUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutUserInput | MemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutUserInput | MemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutUserInput | MemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type GroupActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupActivityCreateWithoutUserInput, GroupActivityUncheckedCreateWithoutUserInput> | GroupActivityCreateWithoutUserInput[] | GroupActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupActivityCreateOrConnectWithoutUserInput | GroupActivityCreateOrConnectWithoutUserInput[]
    upsert?: GroupActivityUpsertWithWhereUniqueWithoutUserInput | GroupActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupActivityCreateManyUserInputEnvelope
    set?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    disconnect?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    delete?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    connect?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    update?: GroupActivityUpdateWithWhereUniqueWithoutUserInput | GroupActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupActivityUpdateManyWithWhereWithoutUserInput | GroupActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupActivityScalarWhereInput | GroupActivityScalarWhereInput[]
  }

  export type GroupInvitationUpdateManyWithoutInvitedUserNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput | GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type GroupInvitationUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedByInput | GroupInvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput | GroupUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCreatorInput | GroupUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput | GroupUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput> | MemberCreateWithoutUserInput[] | MemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutUserInput | MemberCreateOrConnectWithoutUserInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutUserInput | MemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberCreateManyUserInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutUserInput | MemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutUserInput | MemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type GroupActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupActivityCreateWithoutUserInput, GroupActivityUncheckedCreateWithoutUserInput> | GroupActivityCreateWithoutUserInput[] | GroupActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupActivityCreateOrConnectWithoutUserInput | GroupActivityCreateOrConnectWithoutUserInput[]
    upsert?: GroupActivityUpsertWithWhereUniqueWithoutUserInput | GroupActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupActivityCreateManyUserInputEnvelope
    set?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    disconnect?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    delete?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    connect?: GroupActivityWhereUniqueInput | GroupActivityWhereUniqueInput[]
    update?: GroupActivityUpdateWithWhereUniqueWithoutUserInput | GroupActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupActivityUpdateManyWithWhereWithoutUserInput | GroupActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupActivityScalarWhereInput | GroupActivityScalarWhereInput[]
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput> | GroupInvitationCreateWithoutInvitedUserInput[] | GroupInvitationUncheckedCreateWithoutInvitedUserInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedUserInput | GroupInvitationCreateOrConnectWithoutInvitedUserInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput[]
    createMany?: GroupInvitationCreateManyInvitedUserInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput | GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput> | JoinRequestCreateWithoutUserInput[] | JoinRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutUserInput | JoinRequestCreateOrConnectWithoutUserInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutUserInput | JoinRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JoinRequestCreateManyUserInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutUserInput | JoinRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutUserInput | JoinRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput> | GroupInvitationCreateWithoutInvitedByInput[] | GroupInvitationUncheckedCreateWithoutInvitedByInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutInvitedByInput | GroupInvitationCreateOrConnectWithoutInvitedByInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput[]
    createMany?: GroupInvitationCreateManyInvitedByInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput | GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutInvitedByInput | GroupInvitationUpdateManyWithWhereWithoutInvitedByInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput
    connect?: UserWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput> | MemberCreateWithoutGroupInput[] | MemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutGroupInput | MemberCreateOrConnectWithoutGroupInput[]
    createMany?: MemberCreateManyGroupInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type GroupActivityCreateNestedOneWithoutGroupsInput = {
    create?: XOR<GroupActivityCreateWithoutGroupsInput, GroupActivityUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: GroupActivityCreateOrConnectWithoutGroupsInput
    connect?: GroupActivityWhereUniqueInput
  }

  export type GroupInvitationCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type JoinRequestCreateNestedManyWithoutGroupInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput> | MemberCreateWithoutGroupInput[] | MemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutGroupInput | MemberCreateOrConnectWithoutGroupInput[]
    createMany?: MemberCreateManyGroupInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type GroupInvitationUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
  }

  export type JoinRequestUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumMember_RoleFieldUpdateOperationsInput = {
    set?: $Enums.Member_Role
  }

  export type UserUpdateOneRequiredWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput
    upsert?: UserUpsertWithoutGroupInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupInput, UserUpdateWithoutGroupInput>, UserUncheckedUpdateWithoutGroupInput>
  }

  export type MemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput> | MemberCreateWithoutGroupInput[] | MemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutGroupInput | MemberCreateOrConnectWithoutGroupInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutGroupInput | MemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MemberCreateManyGroupInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutGroupInput | MemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutGroupInput | MemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type GroupActivityUpdateOneWithoutGroupsNestedInput = {
    create?: XOR<GroupActivityCreateWithoutGroupsInput, GroupActivityUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: GroupActivityCreateOrConnectWithoutGroupsInput
    upsert?: GroupActivityUpsertWithoutGroupsInput
    disconnect?: GroupActivityWhereInput | boolean
    delete?: GroupActivityWhereInput | boolean
    connect?: GroupActivityWhereUniqueInput
    update?: XOR<XOR<GroupActivityUpdateToOneWithWhereWithoutGroupsInput, GroupActivityUpdateWithoutGroupsInput>, GroupActivityUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupInvitationUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutGroupInput | GroupInvitationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutGroupInput | GroupInvitationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutGroupInput | GroupInvitationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type JoinRequestUpdateManyWithoutGroupNestedInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutGroupInput | JoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutGroupInput | JoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutGroupInput | JoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput> | MemberCreateWithoutGroupInput[] | MemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutGroupInput | MemberCreateOrConnectWithoutGroupInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutGroupInput | MemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MemberCreateManyGroupInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutGroupInput | MemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutGroupInput | MemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput> | GroupInvitationCreateWithoutGroupInput[] | GroupInvitationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupInvitationCreateOrConnectWithoutGroupInput | GroupInvitationCreateOrConnectWithoutGroupInput[]
    upsert?: GroupInvitationUpsertWithWhereUniqueWithoutGroupInput | GroupInvitationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupInvitationCreateManyGroupInputEnvelope
    set?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    disconnect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    delete?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    connect?: GroupInvitationWhereUniqueInput | GroupInvitationWhereUniqueInput[]
    update?: GroupInvitationUpdateWithWhereUniqueWithoutGroupInput | GroupInvitationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupInvitationUpdateManyWithWhereWithoutGroupInput | GroupInvitationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
  }

  export type JoinRequestUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput> | JoinRequestCreateWithoutGroupInput[] | JoinRequestUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: JoinRequestCreateOrConnectWithoutGroupInput | JoinRequestCreateOrConnectWithoutGroupInput[]
    upsert?: JoinRequestUpsertWithWhereUniqueWithoutGroupInput | JoinRequestUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: JoinRequestCreateManyGroupInputEnvelope
    set?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    disconnect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    delete?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    connect?: JoinRequestWhereUniqueInput | JoinRequestWhereUniqueInput[]
    update?: JoinRequestUpdateWithWhereUniqueWithoutGroupInput | JoinRequestUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: JoinRequestUpdateManyWithWhereWithoutGroupInput | JoinRequestUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutGroupActivitiesInput = {
    create?: XOR<UserCreateWithoutGroupActivitiesInput, UserUncheckedCreateWithoutGroupActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedManyWithoutAvatarActivityInput = {
    create?: XOR<GroupCreateWithoutAvatarActivityInput, GroupUncheckedCreateWithoutAvatarActivityInput> | GroupCreateWithoutAvatarActivityInput[] | GroupUncheckedCreateWithoutAvatarActivityInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAvatarActivityInput | GroupCreateOrConnectWithoutAvatarActivityInput[]
    createMany?: GroupCreateManyAvatarActivityInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutAvatarActivityInput = {
    create?: XOR<GroupCreateWithoutAvatarActivityInput, GroupUncheckedCreateWithoutAvatarActivityInput> | GroupCreateWithoutAvatarActivityInput[] | GroupUncheckedCreateWithoutAvatarActivityInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAvatarActivityInput | GroupCreateOrConnectWithoutAvatarActivityInput[]
    createMany?: GroupCreateManyAvatarActivityInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutGroupActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutGroupActivitiesInput, UserUncheckedCreateWithoutGroupActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupActivitiesInput
    upsert?: UserUpsertWithoutGroupActivitiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupActivitiesInput, UserUpdateWithoutGroupActivitiesInput>, UserUncheckedUpdateWithoutGroupActivitiesInput>
  }

  export type GroupUpdateManyWithoutAvatarActivityNestedInput = {
    create?: XOR<GroupCreateWithoutAvatarActivityInput, GroupUncheckedCreateWithoutAvatarActivityInput> | GroupCreateWithoutAvatarActivityInput[] | GroupUncheckedCreateWithoutAvatarActivityInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAvatarActivityInput | GroupCreateOrConnectWithoutAvatarActivityInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutAvatarActivityInput | GroupUpsertWithWhereUniqueWithoutAvatarActivityInput[]
    createMany?: GroupCreateManyAvatarActivityInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutAvatarActivityInput | GroupUpdateWithWhereUniqueWithoutAvatarActivityInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutAvatarActivityInput | GroupUpdateManyWithWhereWithoutAvatarActivityInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutAvatarActivityNestedInput = {
    create?: XOR<GroupCreateWithoutAvatarActivityInput, GroupUncheckedCreateWithoutAvatarActivityInput> | GroupCreateWithoutAvatarActivityInput[] | GroupUncheckedCreateWithoutAvatarActivityInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutAvatarActivityInput | GroupCreateOrConnectWithoutAvatarActivityInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutAvatarActivityInput | GroupUpsertWithWhereUniqueWithoutAvatarActivityInput[]
    createMany?: GroupCreateManyAvatarActivityInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutAvatarActivityInput | GroupUpdateWithWhereUniqueWithoutAvatarActivityInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutAvatarActivityInput | GroupUpdateManyWithWhereWithoutAvatarActivityInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<GroupCreateWithoutInvitationsInput, GroupUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitationsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupInvitationInput = {
    create?: XOR<UserCreateWithoutGroupInvitationInput, UserUncheckedCreateWithoutGroupInvitationInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupInvitationInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GroupUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<GroupCreateWithoutInvitationsInput, GroupUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutInvitationsInput
    upsert?: GroupUpsertWithoutInvitationsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutInvitationsInput, GroupUpdateWithoutInvitationsInput>, GroupUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutGroupInvitationNestedInput = {
    create?: XOR<UserCreateWithoutGroupInvitationInput, UserUncheckedCreateWithoutGroupInvitationInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupInvitationInput
    upsert?: UserUpsertWithoutGroupInvitationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupInvitationInput, UserUpdateWithoutGroupInvitationInput>, UserUncheckedUpdateWithoutGroupInvitationInput>
  }

  export type GroupCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<GroupCreateWithoutJoinRequestsInput, GroupUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutJoinRequestsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJoinRequestsInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<GroupCreateWithoutJoinRequestsInput, GroupUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutJoinRequestsInput
    upsert?: GroupUpsertWithoutJoinRequestsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutJoinRequestsInput, GroupUpdateWithoutJoinRequestsInput>, GroupUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutJoinRequestsNestedInput = {
    create?: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinRequestsInput
    upsert?: UserUpsertWithoutJoinRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinRequestsInput, UserUpdateWithoutJoinRequestsInput>, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumMember_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Member_Role | EnumMember_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.Member_Role[]
    notIn?: $Enums.Member_Role[]
    not?: NestedEnumMember_RoleFilter<$PrismaModel> | $Enums.Member_Role
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumMember_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Member_Role | EnumMember_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.Member_Role[]
    notIn?: $Enums.Member_Role[]
    not?: NestedEnumMember_RoleWithAggregatesFilter<$PrismaModel> | $Enums.Member_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMember_RoleFilter<$PrismaModel>
    _max?: NestedEnumMember_RoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type GroupCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    roles: $Enums.Member_Role
    members?: MemberCreateNestedManyWithoutGroupInput
    avatarActivity?: GroupActivityCreateNestedOneWithoutGroupsInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput>
  }

  export type GroupCreateManyCreatorInputEnvelope = {
    data: GroupCreateManyCreatorInput | GroupCreateManyCreatorInput[]
  }

  export type MemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
  }

  export type MemberCreateOrConnectWithoutUserInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberCreateManyUserInputEnvelope = {
    data: MemberCreateManyUserInput | MemberCreateManyUserInput[]
  }

  export type GroupActivityCreateWithoutUserInput = {
    id?: string
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
    groups?: GroupCreateNestedManyWithoutAvatarActivityInput
  }

  export type GroupActivityUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutAvatarActivityInput
  }

  export type GroupActivityCreateOrConnectWithoutUserInput = {
    where: GroupActivityWhereUniqueInput
    create: XOR<GroupActivityCreateWithoutUserInput, GroupActivityUncheckedCreateWithoutUserInput>
  }

  export type GroupActivityCreateManyUserInputEnvelope = {
    data: GroupActivityCreateManyUserInput | GroupActivityCreateManyUserInput[]
  }

  export type GroupInvitationCreateWithoutInvitedUserInput = {
    id?: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutInvitationsInput
    invitedBy: UserCreateNestedOneWithoutGroupInvitationInput
  }

  export type GroupInvitationUncheckedCreateWithoutInvitedUserInput = {
    id?: string
    groupId: string
    invitedById: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupInvitationCreateOrConnectWithoutInvitedUserInput = {
    where: GroupInvitationWhereUniqueInput
    create: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput>
  }

  export type GroupInvitationCreateManyInvitedUserInputEnvelope = {
    data: GroupInvitationCreateManyInvitedUserInput | GroupInvitationCreateManyInvitedUserInput[]
  }

  export type JoinRequestCreateWithoutUserInput = {
    id?: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type JoinRequestCreateOrConnectWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestCreateManyUserInputEnvelope = {
    data: JoinRequestCreateManyUserInput | JoinRequestCreateManyUserInput[]
  }

  export type GroupInvitationCreateWithoutInvitedByInput = {
    id?: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
    group: GroupCreateNestedOneWithoutInvitationsInput
    invitedUser: UserCreateNestedOneWithoutInvitationsInput
  }

  export type GroupInvitationUncheckedCreateWithoutInvitedByInput = {
    id?: string
    groupId: string
    invitedUserId: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupInvitationCreateOrConnectWithoutInvitedByInput = {
    where: GroupInvitationWhereUniqueInput
    create: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type GroupInvitationCreateManyInvitedByInputEnvelope = {
    data: GroupInvitationCreateManyInvitedByInput | GroupInvitationCreateManyInvitedByInput[]
  }

  export type GroupUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCreatorInput, GroupUncheckedUpdateWithoutCreatorInput>
    create: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCreatorInput, GroupUncheckedUpdateWithoutCreatorInput>
  }

  export type GroupUpdateManyWithWhereWithoutCreatorInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCreatorInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    role?: StringNullableFilter<"Group"> | string | null
    avatar?: StringNullableFilter<"Group"> | string | null
    color?: StringNullableFilter<"Group"> | string | null
    lastActivity?: StringNullableFilter<"Group"> | string | null
    isPrivate?: BoolNullableFilter<"Group"> | boolean | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    creatorId?: StringFilter<"Group"> | string
    avatarActivityId?: StringNullableFilter<"Group"> | string | null
    roles?: EnumMember_RoleFilter<"Group"> | $Enums.Member_Role
  }

  export type MemberUpsertWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
    create: XOR<MemberCreateWithoutUserInput, MemberUncheckedCreateWithoutUserInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutUserInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutUserInput, MemberUncheckedUpdateWithoutUserInput>
  }

  export type MemberUpdateManyWithWhereWithoutUserInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutUserInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    userId?: StringFilter<"Member"> | string
    groupId?: StringFilter<"Member"> | string
    joinedAt?: DateTimeFilter<"Member"> | Date | string
    role?: EnumMember_RoleFilter<"Member"> | $Enums.Member_Role
  }

  export type GroupActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupActivityWhereUniqueInput
    update: XOR<GroupActivityUpdateWithoutUserInput, GroupActivityUncheckedUpdateWithoutUserInput>
    create: XOR<GroupActivityCreateWithoutUserInput, GroupActivityUncheckedCreateWithoutUserInput>
  }

  export type GroupActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupActivityWhereUniqueInput
    data: XOR<GroupActivityUpdateWithoutUserInput, GroupActivityUncheckedUpdateWithoutUserInput>
  }

  export type GroupActivityUpdateManyWithWhereWithoutUserInput = {
    where: GroupActivityScalarWhereInput
    data: XOR<GroupActivityUpdateManyMutationInput, GroupActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupActivityScalarWhereInput = {
    AND?: GroupActivityScalarWhereInput | GroupActivityScalarWhereInput[]
    OR?: GroupActivityScalarWhereInput[]
    NOT?: GroupActivityScalarWhereInput | GroupActivityScalarWhereInput[]
    id?: StringFilter<"GroupActivity"> | string
    userId?: StringNullableFilter<"GroupActivity"> | string | null
    action?: StringFilter<"GroupActivity"> | string
    target?: StringNullableFilter<"GroupActivity"> | string | null
    activityType?: StringNullableFilter<"GroupActivity"> | string | null
    time?: DateTimeFilter<"GroupActivity"> | Date | string
  }

  export type GroupInvitationUpsertWithWhereUniqueWithoutInvitedUserInput = {
    where: GroupInvitationWhereUniqueInput
    update: XOR<GroupInvitationUpdateWithoutInvitedUserInput, GroupInvitationUncheckedUpdateWithoutInvitedUserInput>
    create: XOR<GroupInvitationCreateWithoutInvitedUserInput, GroupInvitationUncheckedCreateWithoutInvitedUserInput>
  }

  export type GroupInvitationUpdateWithWhereUniqueWithoutInvitedUserInput = {
    where: GroupInvitationWhereUniqueInput
    data: XOR<GroupInvitationUpdateWithoutInvitedUserInput, GroupInvitationUncheckedUpdateWithoutInvitedUserInput>
  }

  export type GroupInvitationUpdateManyWithWhereWithoutInvitedUserInput = {
    where: GroupInvitationScalarWhereInput
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyWithoutInvitedUserInput>
  }

  export type GroupInvitationScalarWhereInput = {
    AND?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
    OR?: GroupInvitationScalarWhereInput[]
    NOT?: GroupInvitationScalarWhereInput | GroupInvitationScalarWhereInput[]
    id?: StringFilter<"GroupInvitation"> | string
    groupId?: StringFilter<"GroupInvitation"> | string
    invitedUserId?: StringFilter<"GroupInvitation"> | string
    invitedById?: StringFilter<"GroupInvitation"> | string
    roleId?: StringNullableFilter<"GroupInvitation"> | string | null
    status?: StringFilter<"GroupInvitation"> | string
    createdAt?: DateTimeFilter<"GroupInvitation"> | Date | string
    respondedAt?: DateTimeNullableFilter<"GroupInvitation"> | Date | string | null
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
    create: XOR<JoinRequestCreateWithoutUserInput, JoinRequestUncheckedCreateWithoutUserInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutUserInput, JoinRequestUncheckedUpdateWithoutUserInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutUserInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type JoinRequestScalarWhereInput = {
    AND?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    OR?: JoinRequestScalarWhereInput[]
    NOT?: JoinRequestScalarWhereInput | JoinRequestScalarWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    groupId?: StringFilter<"JoinRequest"> | string
    userId?: StringFilter<"JoinRequest"> | string
    message?: StringNullableFilter<"JoinRequest"> | string | null
    status?: StringFilter<"JoinRequest"> | string
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
    decidedAt?: DateTimeNullableFilter<"JoinRequest"> | Date | string | null
  }

  export type GroupInvitationUpsertWithWhereUniqueWithoutInvitedByInput = {
    where: GroupInvitationWhereUniqueInput
    update: XOR<GroupInvitationUpdateWithoutInvitedByInput, GroupInvitationUncheckedUpdateWithoutInvitedByInput>
    create: XOR<GroupInvitationCreateWithoutInvitedByInput, GroupInvitationUncheckedCreateWithoutInvitedByInput>
  }

  export type GroupInvitationUpdateWithWhereUniqueWithoutInvitedByInput = {
    where: GroupInvitationWhereUniqueInput
    data: XOR<GroupInvitationUpdateWithoutInvitedByInput, GroupInvitationUncheckedUpdateWithoutInvitedByInput>
  }

  export type GroupInvitationUpdateManyWithWhereWithoutInvitedByInput = {
    where: GroupInvitationScalarWhereInput
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyWithoutInvitedByInput>
  }

  export type UserCreateWithoutGroupInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    memberships?: MemberCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityUncheckedCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type MemberCreateWithoutGroupInput = {
    id?: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
  }

  export type MemberCreateOrConnectWithoutGroupInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput>
  }

  export type MemberCreateManyGroupInputEnvelope = {
    data: MemberCreateManyGroupInput | MemberCreateManyGroupInput[]
  }

  export type GroupActivityCreateWithoutGroupsInput = {
    id?: string
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
    user?: UserCreateNestedOneWithoutGroupActivitiesInput
  }

  export type GroupActivityUncheckedCreateWithoutGroupsInput = {
    id?: string
    userId?: string | null
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
  }

  export type GroupActivityCreateOrConnectWithoutGroupsInput = {
    where: GroupActivityWhereUniqueInput
    create: XOR<GroupActivityCreateWithoutGroupsInput, GroupActivityUncheckedCreateWithoutGroupsInput>
  }

  export type GroupInvitationCreateWithoutGroupInput = {
    id?: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
    invitedUser: UserCreateNestedOneWithoutInvitationsInput
    invitedBy: UserCreateNestedOneWithoutGroupInvitationInput
  }

  export type GroupInvitationUncheckedCreateWithoutGroupInput = {
    id?: string
    invitedUserId: string
    invitedById: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupInvitationCreateOrConnectWithoutGroupInput = {
    where: GroupInvitationWhereUniqueInput
    create: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput>
  }

  export type GroupInvitationCreateManyGroupInputEnvelope = {
    data: GroupInvitationCreateManyGroupInput | GroupInvitationCreateManyGroupInput[]
  }

  export type JoinRequestCreateWithoutGroupInput = {
    id?: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
    user: UserCreateNestedOneWithoutJoinRequestsInput
  }

  export type JoinRequestUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type JoinRequestCreateOrConnectWithoutGroupInput = {
    where: JoinRequestWhereUniqueInput
    create: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type JoinRequestCreateManyGroupInputEnvelope = {
    data: JoinRequestCreateManyGroupInput | JoinRequestCreateManyGroupInput[]
  }

  export type UserUpsertWithoutGroupInput = {
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MemberUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUncheckedUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutGroupInput, MemberUncheckedUpdateWithoutGroupInput>
    create: XOR<MemberCreateWithoutGroupInput, MemberUncheckedCreateWithoutGroupInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutGroupInput, MemberUncheckedUpdateWithoutGroupInput>
  }

  export type MemberUpdateManyWithWhereWithoutGroupInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupActivityUpsertWithoutGroupsInput = {
    update: XOR<GroupActivityUpdateWithoutGroupsInput, GroupActivityUncheckedUpdateWithoutGroupsInput>
    create: XOR<GroupActivityCreateWithoutGroupsInput, GroupActivityUncheckedCreateWithoutGroupsInput>
    where?: GroupActivityWhereInput
  }

  export type GroupActivityUpdateToOneWithWhereWithoutGroupsInput = {
    where?: GroupActivityWhereInput
    data: XOR<GroupActivityUpdateWithoutGroupsInput, GroupActivityUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupActivityUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutGroupActivitiesNestedInput
  }

  export type GroupActivityUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupInvitationWhereUniqueInput
    update: XOR<GroupInvitationUpdateWithoutGroupInput, GroupInvitationUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupInvitationCreateWithoutGroupInput, GroupInvitationUncheckedCreateWithoutGroupInput>
  }

  export type GroupInvitationUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupInvitationWhereUniqueInput
    data: XOR<GroupInvitationUpdateWithoutGroupInput, GroupInvitationUncheckedUpdateWithoutGroupInput>
  }

  export type GroupInvitationUpdateManyWithWhereWithoutGroupInput = {
    where: GroupInvitationScalarWhereInput
    data: XOR<GroupInvitationUpdateManyMutationInput, GroupInvitationUncheckedUpdateManyWithoutGroupInput>
  }

  export type JoinRequestUpsertWithWhereUniqueWithoutGroupInput = {
    where: JoinRequestWhereUniqueInput
    update: XOR<JoinRequestUpdateWithoutGroupInput, JoinRequestUncheckedUpdateWithoutGroupInput>
    create: XOR<JoinRequestCreateWithoutGroupInput, JoinRequestUncheckedCreateWithoutGroupInput>
  }

  export type JoinRequestUpdateWithWhereUniqueWithoutGroupInput = {
    where: JoinRequestWhereUniqueInput
    data: XOR<JoinRequestUpdateWithoutGroupInput, JoinRequestUncheckedUpdateWithoutGroupInput>
  }

  export type JoinRequestUpdateManyWithWhereWithoutGroupInput = {
    where: JoinRequestScalarWhereInput
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupCreateNestedManyWithoutCreatorInput
    groupActivities?: GroupActivityCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    groupActivities?: GroupActivityUncheckedCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    roles: $Enums.Member_Role
    creator: UserCreateNestedOneWithoutGroupInput
    avatarActivity?: GroupActivityCreateNestedOneWithoutGroupsInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateManyWithoutCreatorNestedInput
    groupActivities?: GroupActivityUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    groupActivities?: GroupActivityUncheckedUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    creator?: UserUpdateOneRequiredWithoutGroupNestedInput
    avatarActivity?: GroupActivityUpdateOneWithoutGroupsNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutGroupActivitiesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupCreateNestedManyWithoutCreatorInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutGroupActivitiesInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutGroupActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupActivitiesInput, UserUncheckedCreateWithoutGroupActivitiesInput>
  }

  export type GroupCreateWithoutAvatarActivityInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    roles: $Enums.Member_Role
    creator: UserCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutAvatarActivityInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    roles: $Enums.Member_Role
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutAvatarActivityInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutAvatarActivityInput, GroupUncheckedCreateWithoutAvatarActivityInput>
  }

  export type GroupCreateManyAvatarActivityInputEnvelope = {
    data: GroupCreateManyAvatarActivityInput | GroupCreateManyAvatarActivityInput[]
  }

  export type UserUpsertWithoutGroupActivitiesInput = {
    update: XOR<UserUpdateWithoutGroupActivitiesInput, UserUncheckedUpdateWithoutGroupActivitiesInput>
    create: XOR<UserCreateWithoutGroupActivitiesInput, UserUncheckedCreateWithoutGroupActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupActivitiesInput, UserUncheckedUpdateWithoutGroupActivitiesInput>
  }

  export type UserUpdateWithoutGroupActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type GroupUpsertWithWhereUniqueWithoutAvatarActivityInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutAvatarActivityInput, GroupUncheckedUpdateWithoutAvatarActivityInput>
    create: XOR<GroupCreateWithoutAvatarActivityInput, GroupUncheckedCreateWithoutAvatarActivityInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutAvatarActivityInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutAvatarActivityInput, GroupUncheckedUpdateWithoutAvatarActivityInput>
  }

  export type GroupUpdateManyWithWhereWithoutAvatarActivityInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutAvatarActivityInput>
  }

  export type GroupCreateWithoutInvitationsInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    roles: $Enums.Member_Role
    creator: UserCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
    avatarActivity?: GroupActivityCreateNestedOneWithoutGroupsInput
    joinRequests?: JoinRequestCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutInvitationsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutInvitationsInput, GroupUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupCreateNestedManyWithoutCreatorInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityCreateNestedManyWithoutUserInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityUncheckedCreateNestedManyWithoutUserInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
    GroupInvitation?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutGroupInvitationInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupCreateNestedManyWithoutCreatorInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupInvitationInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityUncheckedCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    joinRequests?: JoinRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInvitationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInvitationInput, UserUncheckedCreateWithoutGroupInvitationInput>
  }

  export type GroupUpsertWithoutInvitationsInput = {
    update: XOR<GroupUpdateWithoutInvitationsInput, GroupUncheckedUpdateWithoutInvitationsInput>
    create: XOR<GroupCreateWithoutInvitationsInput, GroupUncheckedCreateWithoutInvitationsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutInvitationsInput, GroupUncheckedUpdateWithoutInvitationsInput>
  }

  export type GroupUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    creator?: UserUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    avatarActivity?: GroupActivityUpdateOneWithoutGroupsNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUpdateManyWithoutUserNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUncheckedUpdateManyWithoutUserNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
    GroupInvitation?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUpsertWithoutGroupInvitationInput = {
    update: XOR<UserUpdateWithoutGroupInvitationInput, UserUncheckedUpdateWithoutGroupInvitationInput>
    create: XOR<UserCreateWithoutGroupInvitationInput, UserUncheckedCreateWithoutGroupInvitationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupInvitationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupInvitationInput, UserUncheckedUpdateWithoutGroupInvitationInput>
  }

  export type UserUpdateWithoutGroupInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUncheckedUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    roles: $Enums.Member_Role
    creator: UserCreateNestedOneWithoutGroupInput
    members?: MemberCreateNestedManyWithoutGroupInput
    avatarActivity?: GroupActivityCreateNestedOneWithoutGroupsInput
    invitations?: GroupInvitationCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
    members?: MemberUncheckedCreateNestedManyWithoutGroupInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutJoinRequestsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutJoinRequestsInput, GroupUncheckedCreateWithoutJoinRequestsInput>
  }

  export type UserCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupCreateNestedManyWithoutCreatorInput
    memberships?: MemberCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationCreateNestedManyWithoutInvitedUserInput
    GroupInvitation?: GroupInvitationCreateNestedManyWithoutInvitedByInput
  }

  export type UserUncheckedCreateWithoutJoinRequestsInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    group?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    memberships?: MemberUncheckedCreateNestedManyWithoutUserInput
    groupActivities?: GroupActivityUncheckedCreateNestedManyWithoutUserInput
    invitations?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedUserInput
    GroupInvitation?: GroupInvitationUncheckedCreateNestedManyWithoutInvitedByInput
  }

  export type UserCreateOrConnectWithoutJoinRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
  }

  export type GroupUpsertWithoutJoinRequestsInput = {
    update: XOR<GroupUpdateWithoutJoinRequestsInput, GroupUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<GroupCreateWithoutJoinRequestsInput, GroupUncheckedCreateWithoutJoinRequestsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutJoinRequestsInput, GroupUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type GroupUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    creator?: UserUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    avatarActivity?: GroupActivityUpdateOneWithoutGroupsNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserUpsertWithoutJoinRequestsInput = {
    update: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
    create: XOR<UserCreateWithoutJoinRequestsInput, UserUncheckedCreateWithoutJoinRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinRequestsInput, UserUncheckedUpdateWithoutJoinRequestsInput>
  }

  export type UserUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUpdateManyWithoutInvitedUserNestedInput
    GroupInvitation?: GroupInvitationUpdateManyWithoutInvitedByNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    memberships?: MemberUncheckedUpdateManyWithoutUserNestedInput
    groupActivities?: GroupActivityUncheckedUpdateManyWithoutUserNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutInvitedUserNestedInput
    GroupInvitation?: GroupInvitationUncheckedUpdateManyWithoutInvitedByNestedInput
  }

  export type GroupCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    avatarActivityId?: string | null
    roles: $Enums.Member_Role
  }

  export type MemberCreateManyUserInput = {
    id?: string
    groupId: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
  }

  export type GroupActivityCreateManyUserInput = {
    id?: string
    action: string
    target?: string | null
    activityType?: string | null
    time?: Date | string
  }

  export type GroupInvitationCreateManyInvitedUserInput = {
    id?: string
    groupId: string
    invitedById: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type JoinRequestCreateManyUserInput = {
    id?: string
    groupId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type GroupInvitationCreateManyInvitedByInput = {
    id?: string
    groupId: string
    invitedUserId: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type GroupUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    members?: MemberUpdateManyWithoutGroupNestedInput
    avatarActivity?: GroupActivityUpdateOneWithoutGroupsNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarActivityId?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type MemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type MemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type GroupActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutAvatarActivityNestedInput
  }

  export type GroupActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutAvatarActivityNestedInput
  }

  export type GroupActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    activityType?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupInvitationUpdateWithoutInvitedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: UserUpdateOneRequiredWithoutGroupInvitationNestedInput
  }

  export type GroupInvitationUncheckedUpdateWithoutInvitedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    group?: GroupUpdateOneRequiredWithoutInvitationsNestedInput
    invitedUser?: UserUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type GroupInvitationUncheckedUpdateWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedUserId?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUncheckedUpdateManyWithoutInvitedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    invitedUserId?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberCreateManyGroupInput = {
    id?: string
    userId: string
    joinedAt?: Date | string
    role?: $Enums.Member_Role
  }

  export type GroupInvitationCreateManyGroupInput = {
    id?: string
    invitedUserId: string
    invitedById: string
    roleId?: string | null
    status?: string
    createdAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type JoinRequestCreateManyGroupInput = {
    id?: string
    userId: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type MemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type MemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
  }

  export type GroupInvitationUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invitedUser?: UserUpdateOneRequiredWithoutInvitationsNestedInput
    invitedBy?: UserUpdateOneRequiredWithoutGroupInvitationNestedInput
  }

  export type GroupInvitationUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedUserId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupInvitationUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    invitedUserId?: StringFieldUpdateOperationsInput | string
    invitedById?: StringFieldUpdateOperationsInput | string
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutJoinRequestsNestedInput
  }

  export type JoinRequestUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JoinRequestUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GroupCreateManyAvatarActivityInput = {
    id?: string
    name: string
    description?: string | null
    role?: string | null
    avatar?: string | null
    color?: string | null
    lastActivity?: string | null
    isPrivate?: boolean | null
    createdAt?: Date | string
    creatorId: string
    roles: $Enums.Member_Role
  }

  export type GroupUpdateWithoutAvatarActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    creator?: UserUpdateOneRequiredWithoutGroupNestedInput
    members?: MemberUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutAvatarActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
    members?: MemberUncheckedUpdateManyWithoutGroupNestedInput
    invitations?: GroupInvitationUncheckedUpdateManyWithoutGroupNestedInput
    joinRequests?: JoinRequestUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutAvatarActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    lastActivity?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    roles?: EnumMember_RoleFieldUpdateOperationsInput | $Enums.Member_Role
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
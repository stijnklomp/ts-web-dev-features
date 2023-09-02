export type ExpandRecursively<T> = T extends object
    ? T extends infer O
        ? { [K in keyof O]: ExpandRecursively<O[K]> }
        : never
    : T

export type ExpandFunctionRecursively<F extends Function> = F extends (
    ...args: infer A
) => infer R
    ? (...args: ExpandRecursively<A>) => ExpandRecursively<R>
    : never

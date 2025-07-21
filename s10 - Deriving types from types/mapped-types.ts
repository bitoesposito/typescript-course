type Operations = {
  readonly add?: (a: number, b: number) => number | undefined;
  readonly subtract?: (a: number, b: number) => number | undefined;
}

type Results<T> = {
    -readonly [K in keyof T]-?: number;
}

let mathOperations: Operations = {
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
}

let mathResults: Results<Operations> = {
    add: mathOperations.add?.(1, 2) ?? 0,
    subtract: mathOperations.subtract?.(1, 2) ?? 0
}
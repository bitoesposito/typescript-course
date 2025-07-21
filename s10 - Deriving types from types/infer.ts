function add (a: number, b: number) {
    return a + b;
}

// La parola chiave 'infer' in TypeScript viene usata nei 'conditional type' per catturare e "estrarre" un tipo dall'interno di un altro tipo complesso. In questo esempio, 'infer R' prende il tipo di ritorno della funzione (quello dopo =>). Se il tipo T è una funzione (...args: any[]) => R, allora 'R' sarà il tipo di ritorno. In caso contrario, il tipo risultante sarà 'never'.

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never;

type AddFnRecurnValueType = ReturnValueType<AddFn>;
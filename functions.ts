function add(a: number, b: number) : number {
    return a + b;
}

// void è un tipo che rappresenta un valore che non può mai essere presente
function log(message: string): void {
    console.log(message);
}

// never è un tipo che rappresenta un valore che non può mai essere presente
function logAndThrow(errorMessage: string) : never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
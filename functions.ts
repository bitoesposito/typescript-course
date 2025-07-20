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

function performJob(cb: (m: string) => void) {
    cb('Hello');
} 

performJob(log);

type User = {
    name: string;
    age: number;
    greet: () => string;
}

let user: User = {
    name: 'Max',
    age: 30,
    greet() {
        console.log('Hello there!')
        return this.name;
    }
}

user.greet();
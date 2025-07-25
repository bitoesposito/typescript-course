let names: Array<string> = ['John', 'Jane', 'Jim'];

type DataStore<T> = {
    [key: string]: T;
}

let store: DataStore<string|boolean> = {}
store.name = 'John';
store.isInstructor = true;

let nameStore: DataStore<string> = {}

function merge<T, U>(a:T, b:U) {
    return [a, b];
}

const ids = merge(1, '2');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return {...a, ...b}
}
const merged = mergeObj({name: 'Vito'}, {age: 24})
console.log(merged)

class User<T> {
    constructor(
        public id: T
    ) {}
}

const user = new User('123')
class basicUser {
    hobbies: string[] = []

    constructor(
        public name: string,
        private readonly age: number
    ) {}

    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const vito = new basicUser('Vito', 29);
vito.greet();

console.log(vito.name);
// console.log(vito.age); privata quindi non si può accedere

vito.hobbies = ['Sports'];
console.log(vito.hobbies);
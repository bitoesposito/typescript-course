// let hobbies: (string | number)[]
let hobbies: Array< string | number >
hobbies = ['Sports', 'Cooking'];

hobbies.push(10);

let possibleResults: [number, 20];

possibleResults = [10, 20];
// possibleResults = [11, 21];
// possibleResults = [10, 20, 30];

let user: {
    name: string;
    age: number;
    hobbies: string[];
    role : {
        description: string;
        id: number;
    }
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: {
        description: 'admin',
        id: 1
    }
}
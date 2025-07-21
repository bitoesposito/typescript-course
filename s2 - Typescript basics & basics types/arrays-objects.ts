// let hobbies: (string | number)[]
let hobbies: Array< string | number >
hobbies = ['Sports', 'Cooking'];

hobbies.push(10);

let possibleResults: [10 | 20 , 10 | 20];

possibleResults = [10, 20];
possibleResults = [20, 10];
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

let val: {} = 'is a value';

// ecord mi costringe a voler un oggetto con una chiave stringa e un valore stringa o numero con questa impostazione
let data: Record<string, string | number> = {
    name: 'Max',
    age: 30
}

data = {
    name: 'Max',
    age: 30,
    // hobbies: ['Sports', 'Cooking']
}
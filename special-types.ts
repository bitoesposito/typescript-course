let a: undefined | null | string;

a = 'hi';
a = undefined;
a = null;

const inputEl = document.getElementById('user-name') as HTMLInputElement | null;

// if (!inputEl) {
//     throw new Error('Element not found!');
// }

console.log(inputEl?.value);
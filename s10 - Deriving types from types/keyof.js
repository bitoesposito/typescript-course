"use strict";
let validKey;
validKey = 'name';
validKey = 'age';
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value');
    }
    return val;
}
const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
};
const val = getProp(user, 'age');
console.log(val);

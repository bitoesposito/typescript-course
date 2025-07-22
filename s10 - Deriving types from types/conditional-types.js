"use strict";
// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>;
let text = 'hello';
function getFullname(person) {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error('No first name / last name found');
}
const name1 = getFullname({});
const name2 = getFullname({ firstName: 'John', lastName: 'Doe' });

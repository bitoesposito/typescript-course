"use strict";
const userName = 'Vito';
console.log(typeof userName);
const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane'],
};
function loadData(s) {
    console.log(s);
}
loadData(settings);

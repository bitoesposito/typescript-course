const userName = 'Vito';

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane'],
}

function loadData(s: typeof settings) {
    console.log(s);
}

loadData(settings);
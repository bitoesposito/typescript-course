function getLength(val: string) : string;
function getLength(val: any[]) : number;
function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}

const numOfWords = getLength('Does it work?')
const numItems = getLength(["Sport", "Cookies"]);
console.log(numOfWords);
console.log(numItems);
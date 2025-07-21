// metodo record
let storeRecord: Record<string, number | boolean> = {
    id: 5,
    isOpen: false,
}

// metodo index signature
type DataStore = {
    [prop: string]:number | boolean ;
}

let store: DataStore = {}

store.id = 5;
store.isOpen = false;

console.log(store);

let roles = ['admin', 'guest', 'editor'] as const;

// satisfies
const dataEntries = {
    entry1: 1,
    entry2: 2
} satisfies Record<string, number>;

// dataEntries.entry3;
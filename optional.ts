function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User = {
    name: string;
    age: number;
    role?: 'admin' | 'user';
}

let input = '';
// ?? controlla se input è undefined o null invece || controlla se input è undefined o null o '' (valori falsy)
// const didProvideInput = input !! false
const didProvideInput = input ?? false
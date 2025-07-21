class User {
    protected _firstName: string;
    private _lastName: string;

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    static eid = 'USER'; 
    // static è una proprietà che appartiene alla classe e non all'istanza, quindi non si può accedere tramite l'istanza ma direttamente dalla classe (es. User.eid, non come x.eid)
}

console.log(User.eid);

// const vito = new User();
// vito.firstName = 'Vito';
// vito.lastName = 'Schwarz';
// console.log(vito.fullName);

class Employee extends User {
    constructor(public jobTitle: string){
        super()
    }

    work() {
        console.log(this._firstName)
    }
}

abstract class UIElement {
    constructor(public identifier: string){}
}

class sideDrawerElement extends UIElement {
    constructor(
        public identifier: string,
        public position: 'left' | 'right'
    ){
        super(identifier);
    }
}
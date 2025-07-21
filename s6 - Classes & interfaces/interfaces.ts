interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
    role: 'admin' | 'superadmin';
}

class AuthenticatableUser implements Authenticatable {
    constructor(
        public userName: string,
        public email: string,
        public password: string
    ){}
    login() {
        console.log('Logged in');
    }

    logout() {
        console.log('Logged out');
    }
}

function authenticate(user: Authenticatable) {
    user.login();
}

let user: Authenticatable = {
    email: 'mail@address.com',
    password: 'password',
    login() {
        console.log('Logged in');
    },
    logout() {
        console.log('Logged out');
    }
}


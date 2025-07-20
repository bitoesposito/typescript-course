// enum Role {
//     Admin,
//     Editor,
//     Guest
// }

type Role = 'admin' | 'editor' | 'guest';
// type User = {
//     name: string;
//     age: number;
//     role: Role;
// }

// let userRole: Role = 0;
let userRole: Role;

userRole = 'admin';

function access(role: Role) {
    return role;
}
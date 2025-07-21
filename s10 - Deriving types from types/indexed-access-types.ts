const appUser = {
    name: 'Vito',
    age: 24,
    permissions: [
        {
            id: '1',
            title: 'Admin',
            description: 'Admin access',
        }
    ]
}

// type AppUser = {
//     name: string;
//     age: number;
//     permissions: {
//         id: string;
//         title: string;
//         description: string;
//     }[];
// }

type AppUser = typeof appUser;

type Perms = AppUser['permissions'];
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
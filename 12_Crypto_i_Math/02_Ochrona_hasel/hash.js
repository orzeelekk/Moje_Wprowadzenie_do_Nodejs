import inquirer from 'inquirer'
import fs from 'fs'
import crypto from 'crypto'

const { prompt } = inquirer

const salt = '12324125145411abw324';

const getPassword = async (login) => {
    const users = JSON.parse(await fs.promises.readFile('./hashed_users.json'));
    const userByLogin = users[login] || {};
    return userByLogin.password
};
//ZAD 1
// const hashedPassword = async () => {
//     setInterval(() => {
//         console.log('Cos tam cos tam')
//     },1000)
//
//     const users = JSON.parse(await fs.promises.readFile('./users.json'))
//     const hashedUsers = {};
//
//     for (let key in users) {
//         const password = users[key].password;
//         //jakies Sync
//         const hashedPwd = crypto.pbkdf2Sync(
//             password,
//             salt,
//             1000000,
//             512,
//             'sha512',
//         );
//         hashedUsers[key] = {password: hashedPwd.toString('hex')}
//     }
//     await fs.promises.writeFile(
//         './hashed_users.json',
//         JSON.stringify(hashedUsers,null,2)
//     )
// }
// const flow = async () => {
//     try {
//         const {login,password} = await prompt([
//             {name:'login',message:'Login'},
//             {name:'password',message: 'Password'},
//         ]);
//         const passwordFromFile = await getPassword(login);
//         const hashedPwd = crypto.pbkdf2Sync(
//             password,
//             salt,
//             1_000_000,
//             512,
//             'sha512',
//         );
//         console.log(passwordFromFile)
//         console.log(hashedPwd.toString('hex'))
//         if (passwordFromFile !== hashedPwd.toString('hex')) {
//             console.log('Bledny login lub haslo!')
//             return
//         }
//         console.log('Uzytkownik zalogowany wszystko ok')
//     } catch (err) {
//         console.log(err)
//     }
// }
// flow();
//ZAD 2
const hashedPassword = async () => {
    setInterval(() => {
        console.log('Cos tam cos tam')
    },1000)

    const users = JSON.parse(await fs.promises.readFile('./users.json'))
    const hashedUsers = {};

    for (let key in users) {
        const password = users[key].password;
        //jakies Sync
        crypto.pbkdf2Sync(
            password,
            salt,
            1000000,
            512,
            'sha512',
            async (err, hashedPwd) => {
                if (err) {
                    console.log(err);
                    return
                }
                hashedUsers[key] = { password: hashedPwd.toString('hex')}
                await fs.promises.writeFile(
                    './hashed_users.json',
                    JSON.stringify(hashedUsers,null,2)
                )
                console.log(JSON.stringify(hashedUsers,null,2))
            }
        );
    }
}
const flow = async () => {
    try {
        const {login,password} = await prompt([
            {name:'login',message:'Login'},
            {name:'password',message: 'Password'},
        ]);
        const passwordFromFile = await getPassword(login);
        crypto.pbkdf2Sync(
            password,
            salt,
            1_000_000,
            512,
            'sha512',
            (err, hashedPwd) => {
                if (err) throw new Error(err)
                console.log(passwordFromFile)
                console.log(hashedPwd.toString('hex'))
                if (passwordFromFile !== hashedPwd.toString('hex')) {
                    console.log('Bledny login lub haslo')
                    return
                }
                console.log('Uzytkownik zalogowany.')
            }
        );
    } catch (err) {
        console.log(err)
    }
}
flow();
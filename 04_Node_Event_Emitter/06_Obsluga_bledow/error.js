import fs from "fs";
import { EventEmitter } from 'events';

//A

// process.on('uncaughtException',(err) => {
//     console.log(`Nasz blad: ${err}`)
// })
//
// fs.readFile('abc.txt','utf-8', (err) => {
//     if (err) {
//         throw new Error(err)
//     }
// })
// fs.promises.readdir('./').then((dirElements) => console.log(dirElements));


//B
const emitter = new EventEmitter();

fs.readFile('one.txt', 'utf-8', (error) => {
    //wstawiamy errora do callbacka
    if (error) {
        //emitujemy
        emitter.emit('szukanyERROR', error);
    }
});

emitter.on('szukanyERROR', (error) => {
    //nasluchujemy emita
    console.log(error);
});
fs.promises.readdir('./').then((dirElements) => console.log(dirElements));
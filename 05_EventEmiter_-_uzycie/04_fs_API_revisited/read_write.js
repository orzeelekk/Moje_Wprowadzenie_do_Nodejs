import { EventEmitter } from 'events';
import fs from 'fs';
import Path from 'path';

const emitter = new EventEmitter();
// to jest nasluch sam plik write na dole
emitter.on('write', () => {
    fs.readFile('./myTxt.txt', 'utf-8', (err, data) => {
        if (err) {
            emitter.emit('error', new Error(err));
            return;
        }
        emitter.emit('read', data);
    });
});

emitter.on('read', (data) => {
    console.log(data);
});

emitter.on('error', (err) => {
    console.log(err);
});

fs.writeFile('./myTxt.txt', 'Some text here', (err) => {
    if (err) {
        emitter.emit('error', new Error(err));
        return;
    }
    emitter.emit('write');
});
// emitter.on('write',(path,text) => {
//     fs.writeFile(path,text, () => {
//         emitter.emit('read',path);
//     })
// });
//
// emitter.on('read',(path) => {
//     console.log(fs.readFileSync(path,'utf-8'))
//     //readFileSync na to szyfrowane
// });
//
// fs.readFile('./file.txt','utf-8',(err,text) => {
//     console.log(text)
//     emitter.emit('write','file2.txt',text)
// });


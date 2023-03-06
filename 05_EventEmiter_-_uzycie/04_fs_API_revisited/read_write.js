import { EventEmitter } from 'events';
import fs from 'fs';
import Path from 'path';

const emitter = new EventEmitter();

emitter.on('write',(path,text) => {
    fs.writeFile(path,text, () => {
        emitter.emit('read',path);
    })
});

emitter.on('read',(path) => {
    console.log(fs.readFileSync(path))
    //readFileSync??
});

fs.readFile('./file.txt',(err,text) => {
    console.log(text)
    emitter.emit('write','file2.txt',text)
});


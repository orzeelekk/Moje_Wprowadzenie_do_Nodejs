#!/usr/bin/env node
const fs = require('fs');

let userName = process.argv[2];
//uruchamiam po "node chat-room.js + np.Kasia"?

if (!userName) {
    userName = 'Maurycy'
}
const filePath = './chat2.txt'
const writeStream = fs.createWriteStream(filePath, {
    flags: 'a'
})

const userInput = process.stdin;
userInput.setEncoding('utf-8');

userInput.on('data', (text) => {
    const message = `${userName}: ${text}`
    writeStream.write(message);
})

fs.watchFile(filePath, () => {
    console.log(fs.readFileSync(filePath,'utf-8'))
})



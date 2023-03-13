#!/usr/bin/env node
const fs = require('fs');
//1. Sprawdzamy po bin nazwe skryptu (process.argv)
//2. Wpisujemy gdziekolwiek chcemy przez terminal -> pawel_skrypcik text.txt (text.txt to [2])

const fileName = process.argv[2];
console.log(process.argv)
// 0 to interpreter 1 to sciezka do skryptu a 2 to juz dane wprowadzane z linii polecenia

if (!fileName) {
    process.exit(1);
}

const writeStream = fs.createWriteStream(fileName);

const userInput = process.stdin;
//strumien odczytu co nadajemy w terminalu + odkodowanie utf-8
userInput.setEncoding('utf-8');

// userInput.pipe(writeStream)
userInput.on('data', (text) => {
    // console.log(text) tutaj bylby dublowany input
    //if exit jest wczesniej aby nie dopisywac exita na koncu i wylaczac program.
    if (text.trim() === 'exit') {
        process.exit()
    }
    writeStream.write(text)
})

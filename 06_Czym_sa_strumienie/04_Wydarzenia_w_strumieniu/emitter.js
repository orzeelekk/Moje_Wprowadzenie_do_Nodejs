const fs = require('fs')

const input = __dirname + '/input.txt'
const readStream = fs.createReadStream(input)

const output = __dirname + '/output.txt'
const writeStream = fs.createWriteStream(output)

// your code goes here ...
readStream.on('open',(data) => {
    console.log(`readStream data - ${data}`)
})
writeStream.on('open',(data) => {
    console.log(`writeStream data - ${data}`)
})
readStream
    .pipe(writeStream)
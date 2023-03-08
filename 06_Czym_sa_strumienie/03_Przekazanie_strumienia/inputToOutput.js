const fs = require('fs')

const readStream = fs.createReadStream('../02_Strumien_zapisu/target.txt')
const writeStream = fs.createWriteStream('./output.txt')
writeStream.on('pipe',(sourceStream) => {
    console.log(`Jakies info ${sourceStream}`)
})
readStream
    .pipe(writeStream)

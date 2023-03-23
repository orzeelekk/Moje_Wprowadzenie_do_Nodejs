const fs = require('fs')

const input = fs.createReadStream('./input.txt')
const output1 = fs.createWriteStream('./output1.txt')
const output2 = fs.createWriteStream('./output2.txt')

// input.pipe(output1)
// input.pipe(output2)

input.on('data',data => {
    output1.write(data);
    output2.write(data)
})




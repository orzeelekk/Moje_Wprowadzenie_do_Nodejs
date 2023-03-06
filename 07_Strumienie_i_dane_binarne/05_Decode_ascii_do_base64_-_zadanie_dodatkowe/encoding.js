const fs = require('fs')

const message = 'Ik5pZSBkb3R5a2HEhyEiIC0gbXVzaSBiecSHIGplZG7EhSB6ZSBzdHJhc3puaWVqc3p5Y2ggcnplY3p5IGRvIHByemVjenl0YW5pYSB3IGrEmXp5a3UgQnJhaWxsYS4uLg=='

const utf = Buffer.from(message,'base64').toString('utf-8')
const ascii = Buffer.from(message,'base64').toString('ascii')

const writeUtf = fs.createWriteStream(__dirname + '/targer.utf.txt')
const writeAscii = fs.createWriteStream(__dirname + '/targer.ascii.txt')

writeUtf.write(utf);
writeAscii.write(ascii);

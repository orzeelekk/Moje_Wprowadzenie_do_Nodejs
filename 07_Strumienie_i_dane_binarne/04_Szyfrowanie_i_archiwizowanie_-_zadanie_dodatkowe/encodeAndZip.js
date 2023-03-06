const fs = require('fs');
const crypto = require('crypto')
const zlib = require('zlib');

const zip = zlib.createGzip();
const encrypt = crypto.createCipher('aes-256-ctr', 'd6F3Efeq');

const input = fs.createReadStream('./input.txt')
const output = fs.createWriteStream('./output.txt')

input
    .pipe(encrypt)
    .pipe(zip)
    .pipe(output)
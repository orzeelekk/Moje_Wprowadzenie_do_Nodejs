const fs = require('fs');
const crypto = require('crypto')
const zlib = require('zlib');

const unzip = zlib.createUnzip()
const decrypt = crypto.createDecipher('aes-256-ctr', 'd6F3Efeq');

const input = fs.createReadStream('./output.txt')
const output = fs.createWriteStream('./input_extra.txt')

input
    .pipe(unzip)
    .pipe(decrypt)
    .pipe(output)
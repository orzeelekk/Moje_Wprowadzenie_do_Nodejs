const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/input')

let results = []

readStream.on('data',(data) => {
    const utf = data.toString()
    console.log(utf)
    const buffer64 = Buffer.from(utf,'base64')
    // console.log(buffer64);
    const resultUtf = buffer64.toString('utf-8');
    // console.log(resultUtf)
    results.push(...resultUtf.match(/{([^}]*)}/g));
})
readStream.on('close', () => {
    console.log(results)
    console.log(itemsFilter(results))
})

const itemsFilter = results => {
    const uniqKeys = Array.from(new Set(results))
    console.log(uniqKeys)
    return uniqKeys.reduce((accumulator, currentValue) => {
        const occurances = () => results.filter(item => item === currentValue).length
        return {
            //nasze ...zbiory (bez tego robi tylko po 1 szukanej)
            ...accumulator,
            [`${currentValue}`]: occurances()
        }
    }, {})

}


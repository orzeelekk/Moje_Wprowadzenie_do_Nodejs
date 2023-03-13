const fs = require('fs')
const { Gauge } = require('clui')

const createArt = require('./utils/createArt')

module.exports.displayStats = async () => {
    logColorized('red',createArt('Rammstein','stats'))
    fs.watchFile(__dirname + '/stats', () => {
        const currentValue = fs.readFileSync(__dirname + '/stats', 'utf-8')

        const maxValue = 100
        const numberOfRows = 50
        const alarmThreshold = maxValue * 0.8

        const gauge = Gauge(
            currentValue,
            maxValue,
            numberOfRows,
            alarmThreshold
        )
        console.log(gauge)
    })
}
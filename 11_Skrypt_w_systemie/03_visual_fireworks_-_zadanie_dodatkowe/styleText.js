const { prompt } = require('inquirer')
const logColorized = require('./utils/logColorized')
const createArt = require('./utils/createArt')

const questions = [
    {
        name:'text',
        message: 'Type text here'
    },
    {
        type:'list',
        name:'color',
        message: 'Choose color',
        choices: ['pink','blue','red','orange']
    }
]

module.exports.styleText = async () => {
    logColorized('pink',createArt('Rammstein','fonts'))
    const {text,color} = await prompt(questions)
    logColorized(color,text)
}
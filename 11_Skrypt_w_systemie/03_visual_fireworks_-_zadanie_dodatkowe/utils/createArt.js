const figlet = require('figlet')

module.exports = createArt = (font,text) => figlet.textSync(text, {
    font,
    horizontalLayout: 'default',
    verticalLayout: 'default'
})
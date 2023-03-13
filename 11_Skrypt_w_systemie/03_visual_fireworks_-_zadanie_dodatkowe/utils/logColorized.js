const chalk = require('chalk')
module.exports = logColorized = (color,text) => console.log(chalk.keyword(color)(text))
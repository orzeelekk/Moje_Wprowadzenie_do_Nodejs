#!/usr/bin/env node

const { program } = require('commander')
const { displayStats } = require('./displayStats')
const { styleText } = require('./styleText')

program
    .version('1.0.0')
    .description('Visual Fireworks')

program
    .command('fonts')
    .alias('f')
    .description('Styling text to look pretty')
    .action(styleText)

program
    .command('stats')
    .alias('s')
    .description('Read statistics from stats line')
    .action(displayStats)
program.parse(program.argv)

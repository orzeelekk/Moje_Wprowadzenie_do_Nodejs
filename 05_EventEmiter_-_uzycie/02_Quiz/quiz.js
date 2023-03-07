// Useful imports
import inquirer from 'inquirer';
import { EventEmitter } from 'events';

import { quiz } from './questions.js';
const { prompt } = inquirer;
const emitter = new EventEmitter();

// console.log(quiz[0].question.choices)
let correct = 0;
let wrong = 0;
emitter.on('correct',() => {
    ++correct;
})
emitter.on('wrong',() => {
    ++wrong;
})
emitter.on('completed',() => {
    if ((correct/quiz.length) * 100 >= 75) {
        console.log('You passed!')
    } else {
        console.log('You have failed.')
    }
})


async function test() {
    for (let i = 0; i <= quiz.length; i++) {
        const {selected: answer} = await prompt ([
            {
                type: 'list',
                name: 'selected',
                ...quiz[i].question,
            }
        ])
        if (quiz[i].question.choices.indexOf(answer) === quiz[i].answer) {
            emitter.emit('correct')
        } else {
            emitter.emit('wrong')
        }
        emitter.emit('completed')
    }
}
test()

import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('eventOne',(message) => {
    console.log(`Event one: ${message}`)
})
eventEmitter.on('eventTwo',(message) => {
    console.log(`Event two: ${message}`)
})
eventEmitter.on('eventThree',(message) => {
    console.log(`Event three: ${message}`)
})
setTimeout(() => {
    console.log(1)
    eventEmitter.emit('eventOne','Hello')
},2000);
Promise.resolve().then(() => {
    console.log(2)
    eventEmitter.emit('eventTwo','World')
})
console.log(3)
eventEmitter.emit('eventThree',":)")
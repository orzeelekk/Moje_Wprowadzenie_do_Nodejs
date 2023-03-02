import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();


eventEmitter.addListener('eventOne',(message) => {
    console.log(`Mam dla Pana wiadomosc z eventa 1: ${message}`)
})
eventEmitter.on('eventOne',(message) => {
    console.log(`Mam dla Pana wiadomosc z eventa 1: ${message}`)
})
eventEmitter.once('eventTwo',(message) => {
    console.log(`Mam dla Pana 2 wiadomosc z eventa 2: ${message}`)
})
const onEvent = () => {
    console.log('Event from external method');
};
eventEmitter.on('eventOne',onEvent)
// eventEmitter.off('eventOne',onEvent)
console.log(eventEmitter.eventNames());

eventEmitter.emit('eventOne','Hello');
console.log(eventEmitter.eventNames());
eventEmitter.emit('eventOne',123);
console.log(eventEmitter.eventNames());
eventEmitter.emit('eventTwo', false);
console.log(eventEmitter.eventNames());

console.log(eventEmitter.removeAllListeners());
console.log(eventEmitter.eventNames());




























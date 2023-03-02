import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('eventOne',(message) => {
    console.log(`Mam dla Pana wiadomosc z eventa 1: ${message}`)
})
eventEmitter.once('eventTwo',(message) => {
    console.log(`Mam dla Pana 2 wiadomosc z eventa 2: ${message}`)
})

eventEmitter.emit('eventOne','Hello');
eventEmitter.emit('eventOne',123);
eventEmitter.emit('eventOne',[123,"World"]);
eventEmitter.emit('eventTwo', false);
eventEmitter.emit('eventTwo', true);
eventEmitter.emit('eventOne',987);




























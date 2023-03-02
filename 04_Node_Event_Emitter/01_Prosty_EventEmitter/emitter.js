import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('eventOne',(message) => {
    console.log(`Mam dla Pana wiadomosc z eventa 1: ${message}`)
})
eventEmitter.on('eventTwo',(message) => {
    console.log(`Mam dla Pana 2 wiadomosc z eventa 2: ${message}`)
})

eventEmitter.emit('eventOne','Hello');
eventEmitter.emit('eventOne',123);
eventEmitter.emit('eventOne',[123,"World"]);
eventEmitter.emit('eventTwo', {});
eventEmitter.emit('eventTwo', true);
eventEmitter.emit('eventOne',987);
eventEmitter.emit('eventTwo');




























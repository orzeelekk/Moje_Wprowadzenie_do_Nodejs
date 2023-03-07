Promise.resolve(5)
  .then((num) => num + 5)
  .then((num) => num * 5)
  .then((num) => num * 5)
  .then((num) => num - 5)
  .then((num) => console.log(num));

async function flow() {
    const start = await Promise.resolve(5);
    const sum = start + 5;
    const multiply1 = sum * 5;
    const multiply2 = multiply1 * 5;
    const substract = multiply2 - 5;
    console.log(substract)
}
flow();

import { EventEmitter } from 'events';
const emitter = new EventEmitter();
emitter.on("substract",(num) => {
    console.log(num)
})
emitter.on("multiply2",(num) => {
    emitter.emit('substract',num - 5)
})
emitter.on("multiply1",(num) => {
    emitter.emit('multiply2',num * 5)
})

emitter.on("sum",(num) => {
    emitter.emit('multiply1',num * 5)
})

emitter.on("start",(num) => {
    emitter.emit('sum',num + 5)
})
emitter.emit("start",5);

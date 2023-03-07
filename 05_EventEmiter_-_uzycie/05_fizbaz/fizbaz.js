import { EventEmitter } from 'events';
 const emitter = new EventEmitter();

 emitter.on('number',(number) => {
  if (number % 3 === 0 && number % 5 ===0) {
   console.log('fizbaz')
  }
 })
 emitter.on('number',(number) => {
  if (number % 3 === 0 && number % 5 !==0) {
   console.log('fiz')
  }
 })
 emitter.on('number',(number) => {
  if (number % 3 !== 0 && number % 5 ===0) {
   console.log('baz')
  }
 })
 emitter.on('number',(number) => {
  if (number % 3 !== 0 && number % 5 !==0) {
   console.log(number)
  }
 })

for (let i = 0; i <= 100; i++) {
 emitter.emit('number',i);
}

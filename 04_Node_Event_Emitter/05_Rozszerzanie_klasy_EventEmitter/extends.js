import { EventEmitter } from 'events';

class Task extends EventEmitter {
  start() {
    console.log('Started');
    this.emit('started')
  }
  stop() {
    console.log('Stopped');
    this.emit('stopped')
  }
  pause() {
    console.log('Paused');
    this.emit('paused')
  }
  resume() {
    console.log('Resumed');
    this.emit('resumed')
  }
}

const task = new Task();
task.once('started',() => {
  console.log('Zaczynamy...')
})
task.on('paused',() => {
  console.log('-Wstrzymane-')
})
task.on('resumed',() => {
  console.log('-DALEJ-')
})
task.once('stopped',() => {
  console.log('...Koniec')
})
task.start();
task.pause();
task.resume();
task.pause();
task.resume();
task.stop();

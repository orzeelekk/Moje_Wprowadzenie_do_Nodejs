import { EventEmitter } from 'events';

class Timer extends EventEmitter {
    elapsed = 0;
    started = false;
    paused = false;
    _setupInterval() {
        return setInterval(() => {
            if (this.elapsed % 2 === 0) {
                this.emit('tick', ++this.elapsed);
            } else {
                this.emit('tock', ++this.elapsed);
            }
        }, 1 * 1000);
    }
    start() {
        if (!this.started) {
            this.emit('start');
            this.started = true;
            this.interval = this._setupInterval();
        }
    }

    pause() {
        if (this.started && !this.paused) {
            clearInterval(this.interval);
            this.paused = true;
        }
    }

    resume() {
        if (this.started && this.paused) {
            this.interval = this.interval = this._setupInterval();
        }
        this.paused = false;
    }

    stop() {
        if (this.started) {
            clearInterval(this.interval);
            this.started = false;
            this.elapsed = 0;
            this.emit('stop');
        }
    }
}

const timer = new Timer();

timer.on('tick', (num) => {
    console.log('I say TICK', num);
});

timer.on('tock', (num) => {
    console.log('I say TOCK', num);
});
timer.on('start', () => {
    console.log('*********************STARTED*********************');
});
timer.on('stop', () => {
    console.log('*********************STOPPED*********************');
});

timer.start();
timer.start(); // A

setTimeout(() => {
    timer.pause();
}, 4 * 1000);

setTimeout(() => {
    timer.resume();
}, 10 * 1000);

setTimeout(() => {
    timer.stop();
}, 12 * 1000);
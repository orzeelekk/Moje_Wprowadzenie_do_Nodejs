import { EventEmitter } from 'events';

class Timer extends EventEmitter {
    elapsed = 0;
    started = false;
    paused = false;
    //_setupInterval jest ogolny 1 sec odwolanie do elapsed i po nim poszczegolne stany
    _setupInterval() {
        return setInterval(() => {
            if (this.elapsed % 2 === 0) {
                this.emit('tick', ++this.elapsed);
                //i z callbacka bd num
            } else {
                this.emit('tock', ++this.elapsed);
            }
            //oddzielenie 1 * 1000 symboliczne aby widziec ile sec nadajemy
        }, 1 * 1000);
    }

    start() {
        //jezeli this.started = false
        if (!this.started) {
            this.emit('start');
            this.started = true;
            // generuje sie osobny this.interval i na nim bd robic operowac
            this.interval = this._setupInterval();
        }
    }

    pause() {
        if (this.started && !this.paused) {
            clearInterval(this.interval);
            this.paused = true;
            console.log('*********************PAUSED*********************');
        }
    }

    resume() {
        if (this.started && this.paused) {
            //podlapanie pod ten konkretny interwał!
            this.interval = this.interval = this._setupInterval();
        }
        this.paused = false;
        console.log('*********************RESUMED*********************');
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
    //z nasluchu na 'ticka' console logujemy
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

// timer.start();
timer.start(); // A

setTimeout(() => {
    timer.pause();
}, 4 * 1000);

setTimeout(() => {
    timer.resume();
}, 6 * 1000);

setTimeout(() => {
    timer.stop();
}, 12 * 1000);



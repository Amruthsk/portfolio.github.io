// Stopwatch
// ├── Properties:
// │   ├── startTime
// │   ├── endTime
// │   ├── running
// │   └── duration
// ├── Methods:
// │   ├── start()  → set running=true, startTime
// │   ├── stop()   → set running=false, endTime, update duration
// │   ├── reset()  → clear all
// │   └── getDuration() → return duration


function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = fuction(){
        if(running)
            throw new Error('Stopwatch has already started.');
        running = true;

        startTime = new Date();


    };

    this.stop = fuction(){
        if(!running)
            throw new Error('Stopwatch is not started.');
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
        
    };

    this.reset = fuction(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        
    };
    //defining public property
    Object.defineProperty(this,'duration',{
        get:function (){return duration;}

    });
}


//class approach
class Stopwatch {
    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    }

    start() {
        if (this.running) throw new Error('Stopwatch is already running.');
        this.running = true;
        this.startTime = Date.now();
    }

    stop() {
        if (!this.running) throw new Error('Stopwatch is not running.');
        this.running = false;
        this.endTime = Date.now();
        const seconds = (this.endTime - this.startTime) / 1000;
        this.duration += seconds;
    }

    reset() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    }

    getDuration() {
        return this.duration;
    }
}

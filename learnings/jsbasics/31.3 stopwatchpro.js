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


//premature optimization is the root of all evil

function Stopwatch() {
    //Instance members
    let startTime, endTime, running, duration = 0;
    
    //define public property
    Object.defineProperty(this,'duration',{
        get:function (){return duration;}
        set:function(value){duration = value;}

    });

    Object.defineProperty(this,'startTime',{
        get:function (){return startTime;}

    });

    Object.defineProperty(this,'endTime',{
        get:function (){return endTime;}

    });

    Object.defineProperty(this,'running',{
        get:function (){return running;}
    });
}


Stopwatch.prototype.start = fuction(){
    if(this.running)
        throw new Error('Stopwatch has already started.');
    this.running = true;

    this.startTime = new Date();


};

Stopwatch.prototype.stop = fuction(){
    if(!this.running)
        throw new Error('Stopwatch is not started.');
    this.running = false;

    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime())/1000;
    this.duration += seconds;
    
};

Stopwatch.prototype.reset = fuction(){
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
    
};


const sw = new Stopwatch();



//es6

class Stopwatch {
    #startTime = null;
    #endTime = null;
    #running = false;
    #duration = 0;
  
    start() {
      if (this.#running) {
        throw new Error("Stopwatch has already started.");
      }
      this.#running = true;
      this.#startTime = Date.now();
    }
  
    stop() {
      if (!this.#running) {
        throw new Error("Stopwatch is not running.");
      }
      this.#running = false;
      this.#endTime = Date.now();
      const seconds = (this.#endTime - this.#startTime) / 1000;
      this.#duration += seconds;
    }
  
    reset() {
      this.#startTime = null;
      this.#endTime = null;
      this.#running = false;
      this.#duration = 0;
    }
  
    get duration() {
      return this.#duration;
    }
  
    get running() {
      return this.#running;
    }
  
    get startTime() {
      return this.#startTime;
    }
  
    get endTime() {
      return this.#endTime;
    }
  }

  
  const sw = new Stopwatch();

  sw.start();
  
  setTimeout(() => {
    sw.stop();
    console.log("Elapsed time (s):", sw.duration);
  }, 1500);
  
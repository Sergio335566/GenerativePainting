class Timer {
    constructor() {
        this.startTime = Date.now();
        this.seconds = 0;
        this.interval = setInterval(() => {
            let elapsedTime = Date.now() - this.startTime;
            this.seconds = (elapsedTime / 1000).toFixed(2)
            document.querySelector('.timer-value').innerHTML = `${this.seconds}s`;
            this.timer();
        }, 0);
    }
    timer() {
        return this.seconds;
    }
    stopTimer() {
        clearInterval(this.interval);
    }
}
export default Timer;
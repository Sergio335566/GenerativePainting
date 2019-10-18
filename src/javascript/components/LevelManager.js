import Timer from './Timer.js';
class LevelManager {
    constructor() {
        this.init()
    }
    init() {
        this.timer = new Timer()
        this.levelValue = 1;
    }
    levelDifficulty() {
        if (this.timer.seconds > 8.00 && this.levelValue == 1) {
            this.levelValue = 2
        } else if (this.timer.seconds > 15.00 && this.levelValue == 2) {
            this.levelValue = 3
        } else if (this.timer.seconds > 20.00 && this.levelValue == 3) {
            this.levelValue = 4
        } else if (this.timer.seconds > 30.00 && this.levelValue == 4) {
            this.levelValue = 5
        }
        return this.levelValue;
    }
    endGame() {
        this.timer.stopTimer();
    }
}
export default LevelManager;
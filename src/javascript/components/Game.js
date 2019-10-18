import Ennemy from "./Ennemy";
import Player from "./Player";
import Timer from './Timer.js';

class Game {
    constructor() {
        this.init();
    }
    init() {
        const container = document.querySelector('.js-container')
        this.canvas = container.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.levelElm = container.querySelector('.level')
        this.levelSelector = container.querySelector('.js-level')
        this.restart = container.querySelector('.js-restart')
        this.setupFunctions();
    }
    setupFunctions() {
        this.setupValues();
        this.loadPlayerImage();
        this.loadEnnemiesImages();
        this.createCanvas()
        this.resizeCanvas()
        this.setupListeners()
        this.timer = new Timer()
    }
    createCanvas() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }
    setupValues() {
        this.rotateValue = 0;
        this.nbEnnemiesImg = 3;
        this.nbPlayerImg = 2;
        this.nbEnnemies = 3;
        this.finished = false;
        this.ennemies = [];
        this.imgPlayer = [];
        this.imgEnnemies = [];
        this.ennemyProps = {};
        this.playerTab = [];
        this.playerProps = {};
        this.levelValue = 1;
        this.needUpdate = false;
    }
    loadEnnemiesImages() {
        const imgLoadedPromises = []
        for (let index = 0; index < this.nbEnnemiesImg; index++) {
            let img = new Image()
            img.src = `../img/ennemy_0${index}.png`
            imgLoadedPromises.push(this.loadImage(img))
            this.imgEnnemies.push(img)
        }

        Promise.all(imgLoadedPromises).then(() => {
            this.createEnnemies()
        })
    }

    loadImage(img) {
        return new Promise((resolve, reject) => {
            img.onload = () => {
                resolve()
            }
        })
    }

    loadPlayerImage() {
        let img = new Image()
        img.src = `../img/player_01.png`
        img.onload = this.createPlayer.bind(this, img)
    }
    createEnnemies() {
        for (let index = 0; index < this.nbEnnemies; index++) {
            this.ennemyProps = {
                img: this.imgEnnemies[index],
                x: Math.random() * this.canvas.width - 40,
                y: 0,
                width: this.imgEnnemies[index].width / 20,
                height: this.imgEnnemies[index].height / 20,
                speedX: Math.random() * 5 * this.levelValue,
                speedY: Math.random() * 5 * this.levelValue,
                direction: Math.random() * (100 - 50) + 50

            }
            this.ennemy = new Ennemy({
                img: this.ennemyProps.img,
                x: this.ennemyProps.x,
                y: this.ennemyProps.y,
                width: this.ennemyProps.width,
                height: this.ennemyProps.height,
                speedX: this.ennemyProps.speedX,
                speedY: this.ennemyProps.speedY,
            })
            this.ennemies.push(this.ennemy)
        }
        // }

    }
    createPlayer(img) {
        this.playerProps = {
            img: img,
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            width: img.width / 20,
            height: img.height / 20,
        }
        this.player = new Player({
            img: this.playerProps.img,
            x: this.playerProps.x,
            y: this.playerProps.y,
            width: this.playerProps.width,
            height: this.playerProps.height,
        })
        this.playerTab.push(this.playerProps);
        this.draw()

    }
    setupListeners() {
        window.addEventListener('resize', this.resizeCanvas.bind(this))
        window.addEventListener('click', this.clearCanvas.bind(this))
    }
    draw() {
        this.drawPlayer()
        this.drawEnnemy()
        this.levelDifficulty()

        if (!this.finished) {
            window.requestAnimationFrame(this.draw.bind(this))
        }

        for (let index = 0; index < this.ennemies.length; index++) {
            this.detectCollision(index)
        }

    }
    drawPlayer() {
        if (this.player) {
            this.player.draw(this.context)
            this.player.updatePlayerPos()
        }
    }
    drawEnnemy() {
        if (this.ennemies) {
            for (let index = 0; index < this.ennemies.length; index++) {
                this.ennemies[index].draw(this.context)
                this.ennemies[index].updateEnnemyPos()
            }
        }
    }
    detectCollision(index) {
        if (this.ennemies[index].x < this.player.x + this.player.width / 2 + 25 && this.ennemies[index].x > this.player.x - this.player.width / 2 - 30 && this.ennemies[index].y < this.player.y + this.player.height - 10 && this.ennemies[index].y > this.player.y - this.player.height / 2 + 20) {
            this.endGame()
        }
    }
    endGame() {
        this.timer.stopTimer()
        this.levelElm.innerHTML = 'miaam'
        this.restart.classList.add('active')
        this.restart.addEventListener('click', this.restartGame.bind(this))
        this.finished = true
    }
    resizeCanvas() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }
    clearCanvas() {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }
    levelDifficulty() {
        if (this.timer.seconds > 8.00 && this.levelValue == 1) {
            this.levelValue = 2
            this.needUpdate = true
            this.initNewLevel()
        } else if (this.timer.seconds > 15.00 && this.levelValue == 2) {
            this.levelValue = 3
            this.needUpdate = true
            this.initNewLevel()
        } else if (this.timer.seconds > 20.00 && this.levelValue == 3) {
            this.levelValue = 4
            this.needUpdate = true
            this.initNewLevel()
        } else if (this.timer.seconds > 30.00 && this.levelValue == 4) {
            this.levelValue = 5
            this.needUpdate = true
            this.initNewLevel()
        }
    }
    initNewLevel() {
        this.levelSelector.innerHTML = this.levelValue
        this.createEnnemies()
    }
    restartGame() {
        window.location.reload()
    }

}
export default Game;
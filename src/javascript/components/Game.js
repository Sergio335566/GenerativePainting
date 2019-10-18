import Ennemy from "./Ennemy";
import Player from "./Player";
import LevelManager from "./LevelManager";

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
        this.setupValues()
        this.loadPlayerImage()
        this.loadEnnemiesImages()
        this.resizeCanvas()
        this.setupListeners()
    }
    setupValues() {
        this.nbPlayerImg = 2
        this.nbEnnemies = 3
        this.finished = false
        this.ennemies = []
        this.imgEnnemies = []
        this.playerTab = []
        this.needUpdate = false
        this.levelManager = new LevelManager()
        this.currentLevelValue = this.levelManager.levelValue
    }

    loadEnnemiesImages() {
        const imgLoadedPromises = []
        for (let index = 0; index < this.nbEnnemies; index++) {
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
            this.ennemy = new Ennemy({
                img: this.imgEnnemies[index],
                x: Math.random() * this.canvas.width - 40,
                y: 0,
                width: this.imgEnnemies[index].width / 20,
                height: this.imgEnnemies[index].height / 20,
                speedX: Math.random() * 5 * this.currentLevelValue,
                speedY: Math.random() * 5 * this.currentLevelValue,
            })
            this.ennemies.push(this.ennemy)
        }
    }

    createPlayer(img) {
        this.player = new Player({
            img: img,
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            width: img.width / 20,
            height: img.height / 20
        })
        this.playerTab.push(this.player);
        this.draw()

    }

    setupListeners() {
        window.addEventListener('resize', this.resizeCanvas.bind(this))
        window.addEventListener('click', this.clearCanvas.bind(this))
    }

    draw() {
        this.levelManager.levelDifficulty()
        this.drawPlayer()
        this.drawEnnemy()
        this.isLevelChanged()
        if (!this.finished) {
            window.requestAnimationFrame(this.draw.bind(this))
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
                this.detectCollision(index)
            }
        }
    }

    detectCollision(index) {
        if (this.ennemies[index].x < this.player.x + this.player.width / 2 + 25 && this.ennemies[index].x > this.player.x - this.player.width / 2 - 30 && this.ennemies[index].y < this.player.y + this.player.height - 10 && this.ennemies[index].y > this.player.y - this.player.height / 2 + 20) {
            this.endGame()
        }
    }

    endGame() {
        this.levelManager.endGame()
        this.levelElm.innerHTML = 'miaam'
        this.restart.classList.add('active')
        this.restart.addEventListener('click', () => {
            window.location.reload()
        })
        this.finished = true
    }

    isLevelChanged() {
        let newLevel = this.levelManager.levelValue
        if (this.currentLevelValue != newLevel) {
            this.createEnnemies()
        }
        this.levelSelector.innerHTML = this.currentLevelValue
        this.currentLevelValue = newLevel
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    clearCanvas() {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }

}
export default Game;
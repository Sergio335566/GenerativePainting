class Ennemy {
    constructor({ img, x, y, width, height, speedX, speedY, angle }) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speedX = speedX;
        this.speedY = speedY;
        this.angle = angle;
    }
    draw(context) {
        this.context = context;
        this.context.save()
        this.context.translate(this.x, this.y)
        this.context.drawImage(this.img, 0, 0, this.width, this.height)
        this.context.restore()

    }
    updateEnnemyPos() {
        this.angle += 10
        this.x += this.speedX
        this.y += this.speedY
        this.resetEnnemyPosition()
    }
    resetEnnemyPosition() {
        if (this.x + this.width > this.context.canvas.width) {
            this.x = this.context.canvas.width - this.width
            this.speedX = -this.speedX;
        }
        if (this.x < 0) {
            this.x = 0
            this.speedX = -this.speedX;
        }
        if (this.y + this.height > this.context.canvas.height) {
            this.y = this.context.canvas.height - this.height
            this.speedY = -this.speedY;
        }
        if (this.y < 0) {
            this.y = 0
            this.speedY = -this.speedY;
        }
    }
}
export default Ennemy;
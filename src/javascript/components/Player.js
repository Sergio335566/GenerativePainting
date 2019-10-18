class Player {
    constructor({ img, x, y, width, height }) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    draw(context) {
        this.context = context;
        this.context.save()
        this.context.translate(this.x, this.y)
        this.context.drawImage(this.img, 0, 0, this.width, this.height)
        this.context.restore()
        window.addEventListener('mousemove', this.getMousePos.bind(this))
    }
    updatePlayerPos() {
        if (this.mouse) {
            this.x = this.mouse.x - this.width / 2
            this.y = this.mouse.y - this.height / 2
        }
    }
    getMousePos(e) {
        this.mouse = {
            x: e.pageX,
            y: e.pageY
        }
    }
}
export default Player;
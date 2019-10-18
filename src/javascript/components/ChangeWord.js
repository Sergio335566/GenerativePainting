class ChangeWord {
    constructor() {
        this.container = document.querySelector('.js-container')
        this.wordSelector = this.container.querySelector('.js-words');
        this.wordTab = ["looser", "okay", "good", "feeed meee"]
        setInterval(() => {
            this.randomWord = this.wordTab[Math.floor(Math.random() * this.wordTab.length)]
            this.wordInterval()
        }, 1000);

    }
    wordInterval() {
        this.wordSelector.innerHTML = this.randomWord
    }
}
export default ChangeWord;
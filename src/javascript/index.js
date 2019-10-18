//IMPORTS
import Game from './components/Game';
import ChangeWord from './components/ChangeWord'

/*global window, document */
document.addEventListener("DOMContentLoaded", function () {
   let windowStart = document.querySelector('.js-window'),
      buttonStart = windowStart.querySelector('.js-startBtn');

   buttonStart.addEventListener('click', () => {
      windowStart.classList.add('hidden')
      setTimeout(() => {
         new Game();
         // new ChangeWord()
      }, 500);
   })
});

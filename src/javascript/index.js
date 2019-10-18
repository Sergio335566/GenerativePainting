//IMPORTS
import Game from './components/Game';
import LeaderBoard from './components/LeaderBoard';

/*global window, document */
document.addEventListener("DOMContentLoaded", function () {
   let windowStart = document.querySelector('.js-window'),
      buttonStart = windowStart.querySelector('.js-startBtn'),
      leaderboard = document.querySelector('.js-leaderboard'),
      leaderboardBtn = document.querySelector('.js-btnLB'),
      inputName = document.querySelector('.input_name'),
      leaderboardNeedUpdate = false
   leaderboardBtn.addEventListener('click', () => {
      leaderboard.classList.toggle('active')
      if (leaderboard.classList.contains('active')) {
         leaderboardBtn.innerHTML = 'close leaderboard'
      } else {
         leaderboardBtn.innerHTML = 'view leaderboard'
      }
      if (!leaderboardNeedUpdate) {
         leaderboardNeedUpdate = true;
         new LeaderBoard();
      }
   })

   buttonStart.addEventListener('click', () => {
      windowStart.classList.add('hidden')
      window.localStorage.setItem('name', inputName.value)
      setTimeout(() => {
         new Game();
      }, 500);
   })

});
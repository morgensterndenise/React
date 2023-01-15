
import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility'; //importing all the module and using it as alias (changing its name)

let newGame: Game;
//add click handler
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Helpers.getValue('playername');

  const problemCount: number = Number(Helpers.getValue('problemCount'));
  const factor: number = Number(Helpers.getValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

//add click handler to the calculate score btn
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});




import {getValue} from './utility';
import {Result} from './result';
import {Player} from './player';
import {ScoreBoard as ResultPanel} from './scoreboard';


export class Game {
 private scoreboard: ResultPanel = new ResultPanel();

   constructor(public player:Player, public numOfProblems: number, public multFactor: number) {
  
   }

   displayGame(): void {
    //create the html for the current game
   let gameForm: string = '';
   for(let ind=1; ind <= this.numOfProblems; ind++ ){
       gameForm += '<div class="form-group">';
       gameForm += '<label for="answer' + ind + '" class = "col-sm-2 control-label">';
       gameForm += String(this.multFactor) + ' x ' + ind + ' = </label>';

       gameForm += '</div>';
   }
   
   //add the new game
   const gameel: HTMLElement = document.getElementById('game')!;
   gameel.innerHTML = gameForm;
    
   //enable the calculat score button
   document.getElementById('calculate')!.removeAttribute('disabled');
   }

   calculateScore():void {
    let score = 0;
    //TODO
   }
}
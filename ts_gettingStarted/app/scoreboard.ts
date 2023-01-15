import {Result} from './result';

export class ScoreBoard {
   private results: Result[] = [];

   addResult(newRes: Result) :void {
    this.results.push(newRes);
   }

   updateScoreBoard():void {
     let output:string = '<h2> Scoreboard </h2>';

     for(let ind = 0; ind < this.results.length;ind ++){
        const result: Result = this.results[ind];
        output += '<h4>';
        output += result.playerName + ':' + result.score ;
        output += '</h4>';
     }

     const scoresElement: HTMLElement = document.getElementById('scores')!;
     scoresElement.innerHTML = output;

   }
}
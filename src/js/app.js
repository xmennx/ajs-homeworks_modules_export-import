// TODO: write your code here
import sum from './basic';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

const game = new Game();
game.start();

console.log('worked');

console.log(sum([1, 2]));

export default Character;
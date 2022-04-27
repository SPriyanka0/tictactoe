import Start from "./index.js";
import Playing from "./playing.js";
let game = new Start();
let gamePlay = new Playing(document.getElementById("app"));
//change fromm ttt to game = less confusing
// define functions
gamePlay.onBoard = function (i) {
    game.makeMove(i);
    gamePlay.update(game);
};

gamePlay.refresh = function () {
    game = new Start();
    gamePlay.update(game);
};

gamePlay.update(game);
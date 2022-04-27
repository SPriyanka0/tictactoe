import play from "./playing.js";
import start from "/index.js";

let ttt = new start();
let gamePlay = new play(document.getElementById("app"));

gamePlay.onBoard = function(i){
    ttt.makeMove(i);
    gamePlay.update(ttt);
}
gamePlay.refreshClick = function(){
    ttt = new start();
    gamePlay.update(ttt);
}
gamePlay.update(ttt);
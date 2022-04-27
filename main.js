import play from "./playing.js";
import start from "/index.js";

let ttt = new start();
let gamePlay = new play(document.getElementById("app"));

gamePlay.onBoard = function(i){
console.log('tile clicked: ${i}');
}
gamePlay.refreshClick = function(){
    console.log("Play Again");
}
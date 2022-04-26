import start from "/index.js";

let ttt = new start();


ttt.makeMove(0); //x
ttt.makeMove(3); //o
ttt.makeMove(7); //x
ttt.makeMove(4); //o
ttt.makeMove(2); //x
ttt.makeMove(5); //o
console.log(ttt.board);
console.log(ttt.wLogic());
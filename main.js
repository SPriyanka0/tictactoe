import start from "/index.js";

let ttt = new start();

console.log(ttt.turn);
ttt.makeMove(0);
console.log(ttt.board);
console.log(ttt.turn);
ttt.makeMove(6);
console.log(ttt.board);
export default class start{
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }
    nextTurn(){
        this.turn = this.turn === "X" ? "O" : "X" ;
    }

    makeMove(i){
        if(this.board[i]){
            return;
        }
        this.board[i]= this.turn;
        this.nextTurn();
    }
     //winnign logic = making an array of three # combinations
     wLogic(){
       const combos = [
           [0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [2,4,6],
           [0,4,8]
       ];
       for(const winningCombos of combos){
           const [a,b,c] = winningCombos;
           if(this.board[a] && (this.board[a]=== this.board[b] && this.board[a] === this.board[c] )){
              return winningCombos; 
           }
           return null;
       }  
     }
   

}
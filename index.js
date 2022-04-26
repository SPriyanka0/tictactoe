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
}
export default class Start {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }

    makeMove(i) {
        //stop game when it does not make requirments of inPRogress()
        //so stops game
        if (!this.inProgress()) {
            return;
        }
        //allows a turn

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;
         //to ensure that only allow a turn for the player if on of the array combos have not been seen
        if (!this.wLogic()) {
            this.nextTurn();
        }
    }
     //winnign logic = making an array of three # combinations
    wLogic() {
        const combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of combos) {
            const [a, b, c] = combination;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }
     //to continiue playing the game = none of the winning combinations
    // and "null" meaning empty space on board
    inProgress() {
        return !this.wLogic() && this.board.includes(null);
    }
}
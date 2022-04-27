export default class Playing {
    constructor(root) {
        this.root = root;
        //innerHTML for easy access of eventListeners
        this.root.innerHTML = `
            <div class="header">
                <div class="turn"></div>
                <div class="status"></div>
                <button type="button" class="restart">
                    <i class="icon">Play Again!</i>
                </button>
            </div>
            <div class="board">
                <div class="boxes" data-index="0"></div>
                <div class="boxes" data-index="1"></div>
                <div class="boxes" data-index="2"></div>
                <div class="boxes" data-index="3"></div>
                <div class="boxes" data-index="4"></div>
                <div class="boxes" data-index="5"></div>
                <div class="boxes" data-index="6"></div>
                <div class="boxes" data-index="7"></div>
                <div class="boxes" data-index="8"></div>
            </div>
        `;

        this.onBoard = undefined;
        this.refresh = undefined;

        this.root.querySelectorAll(".boxes").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onBoard) {
                    this.onBoard(tile.dataset.index);
                }
            });
        });

        this.root.querySelector(".restart").addEventListener("click", () => {
            if (this.refresh) {
                this.refresh();
            }
        });
    }
 //change headers for different parts of the game
       //make one whole function for the whole thing
    update(game) {
        this.playerTurn(game);
        this.gameStatus(game);
        this.boardUpdate(game);
    }
//player turn - displays X or o's turn
playerTurn(game) {
        this.root.querySelector(".turn").textContent = `${game.turn}'s turn`;
    }
 //gamestatus - playing, winner, or a tie
 gameStatus(game) {
        let status = "Play!";

        if (game.wLogic()) {
            status = `${game.turn} is the Winner!`;
        } else if (!game.inProgress()) {
            status = "It's a tie!";
        }

        this.root.querySelector(".status").textContent = status;
    }
  //refresh the board?
    boardUpdate(game) {
        const combos = game.wLogic();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.boxes[data-index="${i}"]`);

            tile.classList.remove("winnerWinner");
            tile.textContent = game.board[i];

            if (combos && combos.includes(i)) {
                tile.classList.add("winnerWinner");
            }
        }
    }
}
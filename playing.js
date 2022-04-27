export default class play{
    constructor(root){
        this.root = root;
        //innerHTML for easy access of eventListeners
        this.root.innerHTML = `
        <div class = "header">
        <div class = "turn">
        
        </div>
        <div class = "gameStatus">
            
        </div>
        <button type = "button" class="restart">
            <i class="icon">Play Again</i>

        </button>
        <div class = "gameBoard">
        <div class = "boxes" data-index= "0" ></div>
        <div class = "boxes" data-index= "1" ></div>
        <div class = "boxes" data-index= "2" ></div>
        <div class = "boxes" data-index= "3" ></div>
        <div class = "boxes" data-index= "4" ></div>
        <div class = "boxes" data-index= "5" ></div>
        <div class = "boxes" data-index= "6" ></div>
        <div class = "boxes" data-index= "7" ></div>
        <div class = "boxes" data-index= "8" ></div>
        </div>
        </div>
        `;
        this.onBoard = undefined;
        this.refreshClick = undefined;
        this.root.querySelectorAll(".boxes").forEach(tile => {
            tile.addEventListener("click", () =>{
                if (this.onBoard) {
                    this.onBoard(tile.dataset.index);
                } 
            });
           
        });
        this.root.querySelector(".restart").addEventListener("click", () => {
            if (this.refreshClick) {
                this.refreshClick();
            }
        });
    }
        //change headers for different parts of the game
       //make one whole function for the whole thing
       update(ttt) {
        this.playerTurn(ttt);      
        this.gameStatus(ttt);
        this.boardUpdate(ttt);
    }
       //player turn
       playerTurn(ttt) {
        this.root.querySelector(".turn").textContent = `${ttt.turn}'s turn`;
    }
        //gamestatus
        gameStatus(ttt) {
            let status = "In Progress";
    
            if (ttt.wLogic()) {
                status = `${ttt.turn} is the Winner!`;
            } else if (!ttt.inProgress()) {
                status = "It's a tie!";
            }
    
            this.root.querySelector(".gameStatus").textContent = status;
        }
        //refresh the board?
        boardUpdate(ttt) {
            const combos = ttt.wLogic();
    
            for (let i = 0; i < ttt.gameBoard; i++) {
                const tile = this.root.querySelector(`.boxes[data-index="${i}"]`);
    
                tile.classList.remove("winner");
                tile.textContent = ttt.gameBoard[i];
    
                if (combos && combos.includes(i)) {
                    tile.classList.add("winner");
                }
            }
        }
        
}
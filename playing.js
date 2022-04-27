export default class play{
    constructor(root){
        this.root = root;
        this.root.innerHTML = `
        <div class = "header">
        <div class = "turn">
        who's turn is it?
        </div>
        <div class = "gameStatus">
            you win?
        </div>
        <button type = "button" class="restart">
            <i class="icon">play again</i>

        </button>
        <div class = "gameBoard">
        <div class = "boxes" data-index= "0" >O</div>
        <div class = "boxes" data-index= "1" >O</div>
        <div class = "boxes" data-index= "2" >O</div>
        <div class = "boxes" data-index= "3" >O</div>
        <div class = "boxes" data-index= "4" >O</div>
        <div class = "boxes" data-index= "5" >O</div>
        <div class = "boxes" data-index= "6" >O</div>
        <div class = "boxes" data-index= "7" >O</div>
        <div class = "boxes" data-index= "8" >O</div>
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
}
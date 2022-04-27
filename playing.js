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
        </div>
        `;
    }
}
const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""]
};

function createPlayer (name, marker) {
   return {name, marker};
};

const gameController = (function()  {
    const player1 = createPlayer('Timmy', 'O');
    const player2 = createPlayer('Billy', 'X');

    let currentPlayer = player1;

    const checkWinner = () => {
        const b = gameBoard.board;

        //Check rows
        for (let i = 0; i < 3; i++) {
            if (b[i * 3] && b[i * 3] === b[i * 3 + 1] && b[i * 3] === b[i * 3 + 2])
                return true;
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (b[i] && b[i] === b[i + 3] && b[i] === b[i + 6]) {
                return true;
            }
        }

        // Check diagonals
        if (b[0] && b[0] === b[4] && b[0] === b[8]) return true;
        if (b[2] && b[2] === b[4] && b[2] === b[6]) return true;

        return false;
    };

    const makeTurn = (index) => {
        if (gameBoard.board[index] == "") {
            gameBoard.board[index] = currentPlayer.marker;
            displayController.renderBoard();
        }
        
        if (checkWinner()) {
            console.log(`${currentPlayer.name} wins!`);
            return;
        }

        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    return {makeTurn};

})();

const displayController = {
    boardContainer: document.getElementById('board'),

    renderBoard() {
        this.boardContainer.innerHTML = "";
        gameBoard.board.forEach((cell, index) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.textContent = cell;
            cellDiv.addEventListener('click', () => gameController.makeTurn(index));
           this.boardContainer.appendChild(cellDiv);
        })
    }
}

displayController.renderBoard();
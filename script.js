const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""]
};

function createPlayer (name, marker) {
   return {name, marker};
};

const gameController = (function()  {
    const player1 = createPlayer('Timmy', 'O');
    const player2 = createPlayer('Billy', 'x');

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
            if (b[i] === b[i + 3] && b[i] === b[i + 6]) {
                return true;
            }
        }

        // Check diagonals
        if (b[0] && b[0] === b[4] && b[0] === b[8]) {
            return true;  // Player wins
        }
        if (b[2] && b[2] === b[4] && b[2] === b[6]) {
            return true;  // Player wins
        }

        return false;
    };

    const makeTurn = (index) => {
        if (gameBoard.board[index] == "") {
            gameBoard.board[index] = currentPlayer.marker;
        }
        
        if (checkWinner()) {
            console.log(`${currentPlayer.name} wins!`);
            return;
        }

        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    return {makeTurn};

})();

gameController.makeTurn(0);  // Player 1 ("Timmy" with 'O')
gameController.makeTurn(1);  // Player 2 ("Billy" with 'X')
gameController.makeTurn(3);  // Player 1 ("Timmy" with 'O')
gameController.makeTurn(4);  // Player 2 ("Billy" with 'X')
gameController.makeTurn(6);  // Player 1 ("Timmy" with 'O') wins

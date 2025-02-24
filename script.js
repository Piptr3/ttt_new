const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""]
};

function createPlayer (name, marker) {
   return {name, marker};
};

const gameController = (function()  {
    const player1 = createPlayer('Timmy', 'O');
    const player2 = createPlayer('Billy', 'x');

})();
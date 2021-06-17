const winCombos = [
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diags
    [0,4,8],
    [2.4,6]
];

let gameBoard;
let currentTurn;
let winner;
// null = in progress, T = tie, 1 or -1 = which winner

function initGame() {
    gameBoard =[null, null, null, null, null, null, null, null, null];
    currentTurn=1;
    winner = null; 
}   
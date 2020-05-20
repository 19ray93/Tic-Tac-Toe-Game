const playerSpan = document.getElementById('player');
const gameTable = document.getElementById('game');
const game = {
    turn: 'X',
    move: 0
};
function checkWinningCombo(arrayOf3Cells){
    let winCombination = game.turn + game.turn + game.turn;    
    if(winCombination == arrayOf3Cells.map(itr => itr.textContent).join('')){
        alert('Game Over, Winner is ' + game.turn);
        location.reload();
    }
}
function isRowCaptured(row){
    let currentRow = Array.from(gameTable.children[0].children[row-1].children);
    checkWinningCombo(currentRow);
}
function isColCaptured(col){
    let currentCol = [
        gameTable.children[0].children[0].children[col-1],
        gameTable.children[0].children[1].children[col-1],
        gameTable.children[0].children[2].children[col-1]
    ];
    checkWinningCombo(currentCol);
}
function isDiagonalCaptured(row,col){
    if(row!=col && (row+col)!=4)
    return;
    let diagOne = [
        gameTable.children[0].children[0].children[0],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[2]        
    ];
    let diagTwo = [
        gameTable.children[0].children[0].children[2],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[0]        
    ];
    checkWinningCombo(diagOne);
    checkWinningCombo(diagTwo);
}
function nextTurn(){
    if(game.move == 9)
	alert('Draw Match');		
    if(game.turn == 'X') 
    game.turn = 'O';
    else
    game.turn = 'X';
    playerSpan.textContent = game.turn;
	game.move++;
}
function boxClicked(row,col){
	if(game.move==9)
	location.reload();
	gameTable.children[0].children[row-1].children[col-1].textContent = game.turn;
    isRowCaptured(row);
    isColCaptured(col);
    isDiagonalCaptured(row,col);
    nextTurn();
}

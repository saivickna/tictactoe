var playerTurn = true;
var board = new Array(8);
var switchPlayers = () => {
  playerTurn = !playerTurn;
  $('#player').text(playerTurn ? 'Player 1 Turn' : 'Player 2 Turn');
}
var checkBoard = (board, playerCheck) => {

  if ((board[0] === playerCheck && board[1] === playerCheck && board[2] === playerCheck) ||
      (board[3] === playerCheck && board[4] === playerCheck && board[5] === playerCheck) ||
      (board[6] === playerCheck && board[7] === playerCheck && board[8] === playerCheck) ||
      (board[0] === playerCheck && board[3] === playerCheck && board[6] === playerCheck) ||
      (board[1] === playerCheck && board[4] === playerCheck && board[7] === playerCheck) ||
      (board[2] === playerCheck && board[5] === playerCheck && board[8] === playerCheck) ||
      (board[0] === playerCheck && board[4] === playerCheck && board[8] === playerCheck) ||
      (board[2] === playerCheck && board[4] === playerCheck && board[6] === playerCheck)) {
      return true;
  }
  return false;
}
$(document).ready(() => {
  $('.board').on('click', '.row', (e) => {
    console.log(e.target.id);
    if (board[e.target.id] === undefined) {
      $('#' + e.target.id).text(playerTurn ? 'X' : 'O');
      board[e.target.id] = playerTurn ? 'X' : 'O';
      if(checkBoard(board, playerTurn ? 'X' : 'O')) {
        
      }
    }
    switchPlayers();
  })

}) 
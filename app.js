var playerTurn = true;
var board = new Array(8);
var gameOver = false;
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
var playerCanGo = (board) => {
  for (var i = 0; i < board.length; i++) {
    if (board[i] === undefined) {
      return true;
    }
  }
  return false;
}
var resetBoard = () => {
  for (var i = 0; i < 9; i++) {
    $('#' + i).text('');
  }
}
$(document).ready(() => {
  $('.board').on('click', '.row', (e) => {
    if (gameOver) {
      resetBoard();
      gameOver = false;
      board = new Array(8);
      switchPlayers();
    }
    if (board[e.target.id] === undefined) {
      $('#message').text('');
      $('#' + e.target.id).text(playerTurn ? 'X' : 'O');
      board[e.target.id] = playerTurn ? 'X' : 'O';
      if(checkBoard(board, playerTurn ? 'X' : 'O')) {
        $('#message').text(playerTurn ? 'Player 1 Wins' : 'Player 2 Wins');
        gameOver = true;
        $('#player').text('Click to Restart.');
      } else if (!playerCanGo(board)) {
        $('#message').text('Tie Game!');
        gameOver = true;
        $('#player').text('Click to Restart.');
      } else {
        switchPlayers();
      }     
    } else {
      $('#message').text('Invalid selection. Please choose another square');
    }

  })

}) 
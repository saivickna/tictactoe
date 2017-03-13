var playerTurn = true;
var gameBoard = new TicTacToeBoard();
var gameOver = false;
var switchPlayers = () => {
  playerTurn = !playerTurn;
  $('#player').text(playerTurn ? 'Player 1 Turn' : 'Player 2 Turn');
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
      gameBoard.reset();
      switchPlayers();
    }
    if (gameBoard.checkDefined(e.target.id)) {
      $('#message').text('');
      $('#' + e.target.id).text(playerTurn ? 'X' : 'O');
      gameBoard.set(e.target.id, playerTurn ? 'X' : 'O');
      if(gameBoard.checkBoard(playerTurn ? 'X' : 'O')) {
        $('#message').text(playerTurn ? 'Player 1 Wins' : 'Player 2 Wins');
        gameOver = true;
        $('#player').text('Click to Restart.');
      } else if (!gameBoard.playerCanGo()) {
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
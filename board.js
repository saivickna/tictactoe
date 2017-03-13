function TicTacToeBoard () {
  this.game = new Array(8);
};
TicTacToeBoard.prototype.checkBoard = function(playerCheck) {
  var board = this.game;
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
TicTacToeBoard.prototype.reset = function() {
  this.game = new Array(8);
}
TicTacToeBoard.prototype.checkDefined = function(i) {
  return (this.game[i] === undefined);
}
TicTacToeBoard.prototype.set = function(i, player) {
  if (this.game[i] === undefined) {
    this.game[i] = player;
  }
}
TicTacToeBoard.prototype.playerCanGo = function() {
  for (var i = 0; i < this.game.length; i++) {
    if (this.game[i] === undefined) {
      return true;
    }
  }
  return false;
}

module.exports = TicTacToeBoard;
var expect = require('chai').expect;
var Board = require('../board.js');

describe('tic tac toe', function() {
  it('should exist as an object', function(done) {
    expect(Board).to.exist;
    done();
  });

  it('should be able to be instatiated and have a property game', function(done) {
    var board = new Board();
    expect(board.game).to.exist;
    done();
  });

  it('should be able to be instatiated and have a property game', function(done) {
    var board = new Board();
    expect(board.game).to.exist;
    done();
  });

  it('should be able to be not allow a user to play on the same spot', function(done) {
    var board = new Board();
    board.set(0, 'X');
    board.set(0, 'O');
    expect(board.game[0]).to.equal('X');
    done();
  });

  it('should be able let the user know if a spot has been taken', function(done) {
    var board = new Board();
    board.set(0, 'X');
    expect(board.checkDefined(0)).to.equal(false);
    done();
  });

  it('should be able verify a game has won', function(done) {
    var board = new Board();
    board.set(0, 'X');
    board.set(1, 'X');
    board.set(2, 'X');
    expect(board.checkBoard('X')).to.equal(true);
    done();
  });

  it('should be able verify all spots are taken', function(done) {
    var board = new Board();
    board.set(0, 'X');
    board.set(1, 'X');
    board.set(2, 'X');
    board.set(3, 'X');
    board.set(4, 'X');
    board.set(5, 'X');
    board.set(6, 'X');
    board.set(7, 'X');
    board.set(8, 'X');
    expect(board.playerCanGo()).to.equal(false);
    done();
  });
});
function Character( label, size, cells ) {
  this.index = cells.indexOf(label);
  this.x = (this.index % size);
  this.y = Math.floor(this.index / size)
}

function BotSavesPrincess( input ) {
  this.size  = input.split("\n").slice(0, 1);
  this.cells = input.split("\n").slice(1).join("");

  this.princess = new Character("p", this.size, this.cells);
  this.bot      = new Character("m", this.size, this.cells);

  this.bot.shouldMoveLeft = (this.princess.x < this.bot.x);
  this.bot.shouldMoveUp   = (this.princess.y < this.bot.y);

  this.bot.moveLeftOrRight = (this.bot.shouldMoveLeft ? "LEFT" : "RIGHT");
  this.bot.moveUpOrDown    = (this.bot.shouldMoveUp   ? "UP"   : "DOWN" );
}

BotSavesPrincess.prototype = {
  'numberOfMoves' : function( direction ) {
    return Math.abs(this.princess[direction] - this.bot[direction]);
  }

, 'moves' : function() {
    var moves = [];

    for (var i = 0; i < this.numberOfMoves('y'); i++ ) {
      moves.push( this.bot.moveUpOrDown );
    }

    for ( var i = 0; i < this.numberOfMoves('x'); i++ ) {
      moves.push( this.bot.moveLeftOrRight );
    }

    return moves.join('\n');
  }
}

module.exports = BotSavesPrincess;

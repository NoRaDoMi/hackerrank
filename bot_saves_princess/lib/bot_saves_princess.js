function Princess( size, cells ) {
  this.index = cells.indexOf("p");
  this.posX = function() {
    return (this.index % size);
  }
}

function BotSavesPrincess( input ) {
  this.size = input.split("\n").slice(0, 1);
  this.cells = input.split("\n").slice(1).join("");

  this.princess = new Princess( this.size, this.cells );
  this.moves = function() {};
}

module.exports = BotSavesPrincess;

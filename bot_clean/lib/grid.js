var DirtyCell = require("./dirty_cell.js");

function Grid( rows ) {
  var grid = this;

  this.dirtyCells = [];

  for (var x = 0; x < rows.length; x++ ) {
    var row = rows[x];

    for (var y = 0; y < row.length; y++ ){
      if ( row[y] === "d" ) {
        var dirtyCell = new DirtyCell( x, y );
        grid.dirtyCells.push( dirtyCell );
      }
    }
  }
}

module.exports = Grid

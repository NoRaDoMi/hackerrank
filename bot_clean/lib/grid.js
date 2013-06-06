var DirtyCell = require("./dirty_cell.js");

function Grid( rows ) {
  this.dirtyCells = this._findDirtyCells( rows );
}

Grid.prototype = {
  '_findDirtyCells' : function( rows ) {
    var dirtyCells = [];

    for (var x = 0; x < rows.length; x++ ) {
      var row = rows[x];

      for (var y = 0; y < row.length; y++ ){
        if ( row[y] === "d" ) {
          dirtyCells.push( new DirtyCell( x, y ) );
        }
      }
    }

    return dirtyCells;
  }
}

module.exports = Grid

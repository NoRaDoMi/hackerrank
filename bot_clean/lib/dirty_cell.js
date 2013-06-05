function DirtyCell(x, y) {
  this.x = x;
  this.y = y;
}

DirtyCell.prototype = {
  'distanceFrom' : function( cell ) {
    var deltaX = Math.pow( this.x - cell.x, 2 )
      , deltaY = Math.pow( this.y - cell.y, 2 );

    return Math.sqrt( deltaX + deltaY );
  }

, 'position' : function() {
    return [this.x, this.y].join(' ');
  }
}

module.exports = DirtyCell

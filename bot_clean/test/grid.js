var Grid = require("../lib/grid.js")
  , DirtyCell = require("../lib/dirty_cell.js")
  , assert = require("assert");

describe("Grid", function() {

  it("identifies dirty cells", function() {
    var grid = new Grid([
        "b---d"
      , "-d--d"
      , "--dd-"
      , "--d--"
      , "----d" 
    ]);

    assert.equal( 7, grid.dirtyCells.length );

    assert.equal( "0 4", grid.dirtyCells[0].position() );
    assert.equal( "1 1", grid.dirtyCells[1].position() );
    assert.equal( "1 4", grid.dirtyCells[2].position() );
    assert.equal( "2 2", grid.dirtyCells[3].position() );
    assert.equal( "2 3", grid.dirtyCells[4].position() );
    assert.equal( "3 2", grid.dirtyCells[5].position() );
    assert.equal( "4 4", grid.dirtyCells[6].position() );
  });
});



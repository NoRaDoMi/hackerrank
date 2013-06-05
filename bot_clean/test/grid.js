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
  });
});



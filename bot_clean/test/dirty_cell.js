var DirtyCell = require("../lib/dirty_cell.js");
var assert = require("assert");

describe("DirtyCell", function() {

  it("stores the co-ordinates", function() {
    var dirtyCell = new DirtyCell(4, 2);

    assert.equal( 4, dirtyCell.x );
    assert.equal( 2, dirtyCell.y );
  });

});

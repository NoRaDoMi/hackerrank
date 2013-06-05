var DirtyCell = require("../lib/dirty_cell.js")
  , Bot = require("../lib/bot.js")
  , assert = require("assert");

describe("DirtyCell", function() {

  it("stores the co-ordinates", function() {
    var dirtyCell = new DirtyCell(4, 2);

    assert.equal( 4, dirtyCell.x );
    assert.equal( 2, dirtyCell.y );
  });

  describe("position", function() {
    it("returns the space delimited co-ordinates", function() {
      var dirtyCell = new DirtyCell(3, 4);
      assert.equal( "3 4", dirtyCell.position() );
    });
  });

  describe("distanceFrom", function() {
    it("returns the delta of the co-ordinates", function() {
      var dirtyCell = new DirtyCell(-2, 1)
        , bot = new Bot("1 5");

      assert.equal( 5, dirtyCell.distanceFrom( bot ) );
    });
  });

});

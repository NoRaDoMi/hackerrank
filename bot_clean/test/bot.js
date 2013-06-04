var Bot = require("../lib/bot.js");
var assert = require("assert");

describe("Bot", function() {
  it("stores the bots co-ordinates", function() {
    var bot = new Bot("0 2");

    assert.equal( 0, bot.x );
    assert.equal( 2, bot.y );
  });
});

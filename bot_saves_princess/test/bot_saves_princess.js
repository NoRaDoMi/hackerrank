var assert = require("assert")
  , botSavesPrincess = require("../lib/bot_saves_princess.js");

describe("Integration Test", function() {
  var sampleInput = [
    "3"
  , "---"
  , "-m-"
  , "p--"
  ].join('\n');

  var expectedOutput = [
    "DOWN"
  , "LEFT"
  ].join('\n');

  it("provides the correct sample output", function() {
    var bot = new botSavesPrincess( sampleInput );
    assert.equal( expectedOutput, bot.moves() )
  });

});

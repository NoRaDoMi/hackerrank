var assert = require("assert")
  , botSavesPrincess = require("../lib/bot_saves_princess_2.js");

describe("Version 2", function() {

  it("returns LEFT when the bot needs to go left", function() {
    var sampleInput = [
      "5"
    , "2 3"
    , "-----"
    , "-----"
    , "p--m-"
    , "-----"
    , "-----"
    ].join('\n');

    var bot = new botSavesPrincess( sampleInput );
    assert.equal( "LEFT", bot.nextMove() );
  });

  it("returns RIGHT when the bot needs to go right", function() {
    var sampleInput = [
      "5"
    , "0 4"
    , "-----"
    , "-----"
    , "-----"
    , "-----"
    , "m--p-"
    ].join('\n');

    var bot = new botSavesPrincess( sampleInput );
    assert.equal( "RIGHT", bot.nextMove() );
  });

  it("returns UP when the bot needs to go up", function() {
    var sampleInput = [
      "5"
    , "0 4"
    , "p----"
    , "-----"
    , "-----"
    , "-----"
    , "m----"
    ].join('\n');

    var bot = new botSavesPrincess( sampleInput );
    assert.equal( "UP", bot.nextMove() );
  });

  it("returns DOWN when the bot needs to go down", function() {
    var sampleInput = [
      "5"
    , "0 0"
    , "m----"
    , "-----"
    , "-----"
    , "-----"
    , "p----"
    ].join('\n');

    var bot = new botSavesPrincess( sampleInput );
    assert.equal( "DOWN", bot.nextMove() );
  });
});

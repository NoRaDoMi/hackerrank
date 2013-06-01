var assert = require("assert")
  , botSavesPrincess = require("../lib/bot_saves_princess");

describe("Princess", function() {
  describe("posX", function() {

    it("is 0 when the princess is in the first column",
      function() {
        var bot = new botSavesPrincess([
            "3"
          , "---"
          , "p--"
          , "---"
        ].join("\n"));

        assert.equal( 0 , bot.princess.posX() )
    });

    it("is 1 when the princess is in the second column",
      function() {
        var bot = new botSavesPrincess([
            "3"
          , "---"
          , "---"
          , "-p-"
        ].join("\n"));

        assert.equal( 1, bot.princess.posX() );
    });

    it("is 2 when the princess is in the third column",
      function() {
        var bot = new botSavesPrincess([
            "3"
          , "--p"
          , "---"
          , "---"
        ].join("\n"));

        assert.equal( 2, bot.princess.posX() );
    });
   
  })
});

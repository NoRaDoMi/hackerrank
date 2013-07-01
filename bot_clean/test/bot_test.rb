require 'minitest/autorun'
require_relative '../lib/bot'

describe Bot do
  describe "#initialize" do
    it "remembers the x coordinate" do
      bot = Bot.new("0", "4")
      assert_equal 0, bot.x
    end

    it "remembers the y coordinate" do
      bot = Bot.new("0", "4")
      assert_equal 4, bot.y
    end
  end
end

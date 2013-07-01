require 'minitest/autorun'
require_relative '../lib/board'

describe Board do
  describe "#initialize" do
    it "finds the rows" do
      board = Board.new([
        '-----',
        '-----',
        '-----',
        '-----',
        '-----'
      ])

      assert_equal 5, board.rows.size
    end
  end
end

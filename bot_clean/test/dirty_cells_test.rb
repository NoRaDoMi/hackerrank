require 'minitest/autorun'
require_relative '../lib/dirty_cells'

describe DirtyCells do
  describe "#parse" do
    before do
      @dirty_cells = DirtyCells.parse([
        "---",
        "---",
        "--d"
      ])
    end

    it "finds the dirty cells" do
      assert_equal 1, @dirty_cells.size
    end

    it "knows the x coordinate of the cells" do
      assert_equal 2, @dirty_cells.first.x
    end

    it "knows the y coordinate of the cells" do
      assert_equal 2, @dirty_cells.first.y
    end
  end
end

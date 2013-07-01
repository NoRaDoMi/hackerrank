require 'minitest/autorun'
require_relative '../lib/row'
require_relative '../lib/cell'

describe Row do
  before do
    @row = Row.new('--x--', '2')
  end

  describe "#initialize" do
    it "remembers the y coordinate" do
      assert_equal 2, @row.y
    end
  end

  describe "#cells" do
    it "returns the cells" do
      assert_equal 5, @row.cells.size
    end
  end

end

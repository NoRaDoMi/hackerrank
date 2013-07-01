require 'minitest/autorun'
require_relative '../lib/cell'

describe Cell do
  describe "#initialize" do
    before do
      @cell = Cell.new('-', '0', '2')
    end

    it "remembers the value" do
      assert_equal '-', @cell.value
    end

    it "remembers the x coordinate" do
      assert_equal 0, @cell.x
    end

    it "remembers the y coordinate" do
      assert_equal 2, @cell.y
    end
  end

  describe "#dirty?" do
    it "is dirty when the cell's value is 'd'" do
      cell = Cell.new('d', 0, 0)
      assert cell.dirty?
    end

    it "is not dirty otherwise" do
      cell = Cell.new('-', 0, 0)
      refute cell.dirty?
    end
  end
end

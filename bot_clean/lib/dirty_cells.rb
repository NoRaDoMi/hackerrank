class DirtyCells
  DIRTY_CELL = 'd'

  include Enumerable

  class DirtyCell < Struct.new(:x, :y)
  end

  def self.parse(cells)
    new(cells.each_with_index.map do |row, y|
      row.chars.each_with_index.map do |cell, x|
        DirtyCell.new(x, y) if cell == DIRTY_CELL
      end.compact
    end)
  end

  def initialize(cells)
    @cells = cells.flatten
  end

  def each
    @cells.each { |cell| yield cell }
  end

  def size
    @cells.size
  end

end

class Board
  
  def initialize(board)
    @board = board.each_with_index
  end

  def rows
    @rows ||= @board.map { |cells, index| Row.new(cells, index) }
  end

  def cells
    @cells ||= rows.map(&:cells).flatten
  end
end

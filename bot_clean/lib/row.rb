class Row
  attr_reader :y

  def initialize(row, y)
    @row = row.split('').each_with_index
    @y = y.to_i
  end

  def cells
    @cells ||= @row.map do |value, x|
      Cell.new(value, x, @y)
    end
  end
end

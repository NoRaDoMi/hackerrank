class Cell
  attr_reader :value, :x, :y
 
  def initialize(value, x, y)
    @value = value
    @x = x.to_i
    @y = y.to_i
  end

  def dirty?
    @value == 'd'
  end
end

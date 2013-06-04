function Bot(coordinates) {
  this.x = coordinates.slice(0, 1);
  this.y = coordinates.slice(-1);
}

module.exports = Bot;

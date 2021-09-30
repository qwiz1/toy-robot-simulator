const { CARDINAL_POINTS } = require('../constants/constants');
const { Command } = require('./command');
const { Location } = require('../location');

class TurnLeft extends Command {

  execute(location) {
    if (!location) {
      return;
    }
    const currentDirection = location.direction;
    const directions = Object.values(CARDINAL_POINTS);
    let currentIndex = directions.indexOf(currentDirection);

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = directions.length - 1;
    }

    return new Location(location.x, location.y, directions[currentIndex]);
  }
}

module.exports = { TurnLeft };

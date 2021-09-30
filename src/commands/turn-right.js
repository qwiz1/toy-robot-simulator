const { CARDINAL_POINTS } = require('../constants/constants');
const { Command } = require('./command');
const { Location } = require('../location');

class TurnRight extends Command {

  execute(location) {
    if (!location) {
      return;
    }
    const currentDirection = location.direction;
    const directions = Object.values(CARDINAL_POINTS);
    let currentIndex = directions.indexOf(currentDirection);

    currentIndex++;

    if (currentIndex >= directions.length) {
      currentIndex = 0;
    }

    return new Location(location.x, location.y, directions[currentIndex]);
  }
}

module.exports = { TurnRight };

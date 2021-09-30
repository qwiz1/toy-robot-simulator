const {Command} = require('./command');
const {Location} = require('../location');
const { isLocationValid } = require('../helpers/is-location-valid');
const { DEFAULT_MOVE_STEP, CARDINAL_POINTS } = require('../constants/constants');

class Move extends Command {
  execute(location) {
    if (!location) {
      return;
    }
    let newX = location.x;
    let newY = location.y;

    switch (location.direction) {
      case CARDINAL_POINTS.north:
        newY += DEFAULT_MOVE_STEP;
        break;
      case CARDINAL_POINTS.east:
        newX += DEFAULT_MOVE_STEP;
        break;
      case CARDINAL_POINTS.south:
        newY -= DEFAULT_MOVE_STEP;
        break;
      case CARDINAL_POINTS.west:
        newX -= DEFAULT_MOVE_STEP;
        break;
    }

    if (isLocationValid([newX, newY])) {
      return new Location(newX, newY, location.direction)
    }
    return location;
  }
}

module.exports = { Move };
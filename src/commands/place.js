const { isLocationValid } = require('../helpers/is-location-valid');
const { Command } = require('./command');
const { Location } = require('../location');

class Place extends Command {
  constructor(x, y, direction) {
    super();
    this.newLocation = new Location(x, y, direction);
  }

  execute(location) {
    if (isLocationValid([this.newLocation.x, this.newLocation.y])) {
      return this.newLocation;
    }
    return location;
  }
}

module.exports = { Place };
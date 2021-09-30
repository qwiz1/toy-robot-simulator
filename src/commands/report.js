const { Command } = require('./command');

class Report extends Command {
  execute(location) {
    if (!location) {
      return;
    }
    console.log(`REPORT: ${location.x}, ${location.y}, ${location.direction}`);
    return location;
  }
}

module.exports = {Report};

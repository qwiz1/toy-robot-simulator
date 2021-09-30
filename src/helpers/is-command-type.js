const { DEFAULT_COMMANDS } = require('../constants/constants');

const isCommandTypeOfPlace = (command) => {
  if (command.split(' ')[0] === DEFAULT_COMMANDS.place) {
    return /PLACE\s\S{5}/.test(command);
  }
};

module.exports = { isCommandTypeOfPlace };
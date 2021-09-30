const { DEFAULT_COMMANDS } = require("./constants/constants");
const { turnRobot } = require("./rotation");

const runCommand = (command, direction) => {
  switch (command) {
    case DEFAULT_COMMANDS.place:
      return 'You run PLACE command';
    case DEFAULT_COMMANDS.move:
      return 'You run PLACE command';
    case DEFAULT_COMMANDS.right:
      direction = turnRobot(command, direction);
      console.log('your look on ' + direction);
      break;
    case DEFAULT_COMMANDS.left:
      direction = turnRobot(command, direction);
      console.log('your look on ' + direction);
      break;
    case DEFAULT_COMMANDS.report:
      return 'You run PLACE command';
    default:
      return 'Does not have that command ' + command;
  }

  return direction;
}

module.exports = { runCommand };
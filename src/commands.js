const { DEFAULT_COMMANDS } = require('./constants/constants');
const { isFirstCommandFormatValid } = require('./helpers/is-first-command-format-valid');
const { turnRobot } = require('./rotation');

const runCommand = (command, direction, coordinate) => {
  if (isFirstCommandFormatValid(command)) {
    console.log(command);
    return;
  }

  switch (command) {
    case DEFAULT_COMMANDS.move:
      return;
    case DEFAULT_COMMANDS.right:
      direction = turnRobot(command, direction);
      console.log('your look on ' + direction);
      break;
    case DEFAULT_COMMANDS.left:
      direction = turnRobot(command, direction);
      console.log('your look on ' + direction);
      break;
    case DEFAULT_COMMANDS.report:
      const [coordX, coordY] = coordinate;
      const result = `${command}: Current location coordinate X(${coordX}), coordinate Y(${coordY}), cardinal point(${direction})`;
      console.log(result);
      break;
    default:
      console.log('Invalid command: ' + command);
  }

  return direction;
}

module.exports = { runCommand };
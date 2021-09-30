const { DEFAULT_COMMANDS } = require('./constants/constants');
const { isDirectionValid } = require('./helpers/is-direction-valid');
const { isFirstCommandFormatValid } = require('./helpers/is-first-command-format-valid');
const { isLocationValid } = require('./helpers/is-location-valid');
const { getNewLocation } = require('./location');
const { turnRobot } = require('./rotation');

const parsePlaceCommand = (command) => {
  const currentPosition = command.split(' ')[1];
  const [x, y, direction] = currentPosition.split(',');
  return [[parseInt(x), parseInt(y)], direction];
};

const runCommand = (command, location, direction) => {
  
  if (isFirstCommandFormatValid(command)) {
    let [initLocation, initDirection] = parsePlaceCommand(command);

    if (isLocationValid(initLocation) && isDirectionValid(initDirection)){
      return [initLocation, initDirection];
    }

    console.log(`Invalid PLACE args, must be <n[0-4]>,<n[0-4]>,<[N,E,S,W]>.\n Your: ${initLocation} ${initDirection}`);
    return [location, direction];
  }

  switch (command) {
    case DEFAULT_COMMANDS.move:
      const newLocation = getNewLocation(location, direction)
      if (isLocationValid(newLocation)) {
        location = newLocation;
      } else {
        console.log("Ops you hit the wall!");
      }
      break;
    case DEFAULT_COMMANDS.right:
      direction = turnRobot(command, direction);
      break;
    case DEFAULT_COMMANDS.left:
      direction = turnRobot(command, direction);
      break;
    case DEFAULT_COMMANDS.report:
      const [coordX, coordY] = location;
      const result = `${command}: Current location coordinate X(${coordX}), coordinate Y(${coordY}), cardinal point(${direction})`;
      console.log(result);
      break;
    default:
      console.log('Invalid command: ' + command);
      break;
  }

  return [location, direction];
}

module.exports = { runCommand };
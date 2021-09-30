const { CARDINAL_POINTS, INITIAL_CARDINAL_POINTS_VALUE, END_CARDINAL_POINTS_VALUE, DEFAULT_COMMANDS } = require('./constants/constants')

const turnRobot = (command, currentDirection) => {
  const directions = Object.values(CARDINAL_POINTS);
  let currentIndex = directions.indexOf(currentDirection);

  switch (command) {
    case DEFAULT_COMMANDS.right:
      currentIndex++;
      break;
    case DEFAULT_COMMANDS.left:
      currentIndex--;
      break;
  }
  
  if (currentIndex < INITIAL_CARDINAL_POINTS_VALUE) {
    return CARDINAL_POINTS.west;
  }

  if (currentIndex > END_CARDINAL_POINTS_VALUE) {
    return CARDINAL_POINTS.north;
  }

  return directions[currentIndex];
};

module.exports = { turnRobot };

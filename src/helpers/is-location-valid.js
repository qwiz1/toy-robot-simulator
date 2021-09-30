const { INITIAL_BOARD_VALUE, END_BOARD_VALUE } = require('../constants/constants');

const isLocationValid = (location) => {
  const [coordX, coordY] = location;

  const isValidX = coordX >= INITIAL_BOARD_VALUE && coordX <= END_BOARD_VALUE;
  const isValidY = coordY >= INITIAL_BOARD_VALUE && coordY <= END_BOARD_VALUE;

  return isValidX && isValidY;
};

module.exports = { isLocationValid };

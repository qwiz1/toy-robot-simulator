const { CARDINAL_POINTS } = require("../constants/constants")

const isDirectionValid = (direction) => {
  return Object.values(CARDINAL_POINTS).includes(direction);
};

module.exports = { isDirectionValid };
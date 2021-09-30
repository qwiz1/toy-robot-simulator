const { CARDINAL_POINTS, DEFAULT_MOVE_STEP } = require('./constants/constants');

const getNewLocation = (location, direction) => {
  let [coordX, coordY] = location;
  
  switch (direction) {
    case CARDINAL_POINTS.north:
      coordY += DEFAULT_MOVE_STEP;
      return [coordX, coordY];
    case CARDINAL_POINTS.east:
      coordX += DEFAULT_MOVE_STEP;
      return [coordX, coordY];
    case CARDINAL_POINTS.south:
      coordY -= DEFAULT_MOVE_STEP;
      return [coordX, coordY];
    case CARDINAL_POINTS.west:
      coordX -= DEFAULT_MOVE_STEP;
      return [coordX, coordY];
  }
};

module.exports = { getNewLocation };

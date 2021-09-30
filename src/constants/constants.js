const DEFAULT_COMMANDS = {
  place: 'PLACE',
  move: 'MOVE',
  right: 'RIGHT',
  left: 'LEFT',
  report: 'REPORT',
};

const CARDINAL_POINTS = {
  north: 'N',
  east: 'E',
  south: 'S',
  west: 'W',
};

const INITIAL_CARDINAL_POINTS_VALUE = 0;
const END_CARDINAL_POINTS_VALUE = 3;
const DEFAULT_COORDINATE = [0, 0];
const INITIAL_STEP = 0;


module.exports = {
  DEFAULT_COMMANDS,
  CARDINAL_POINTS,
  INITIAL_CARDINAL_POINTS_VALUE,
  END_CARDINAL_POINTS_VALUE,
  DEFAULT_COORDINATE,
  INITIAL_STEP,
};

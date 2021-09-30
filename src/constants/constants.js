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

module.exports = {
  DEFAULT_COMMANDS,
  CARDINAL_POINTS,
  INITIAL_CARDINAL_POINTS_VALUE,
  END_CARDINAL_POINTS_VALUE,
};

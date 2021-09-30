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

const INITIAL_BOARD_VALUE = 0;
const END_BOARD_VALUE = 4;
const DEFAULT_COORDINATE = [0, 0];
const INITIAL_STEP = 0;
const DEFAULT_MOVE_STEP = 1;
const VALID_PLACE_REGEX = /PLACE\s[0-4],[0-4],[N,S,W,E]/;


module.exports = {
  DEFAULT_COMMANDS,
  CARDINAL_POINTS,
  DEFAULT_COORDINATE,
  INITIAL_STEP,
  DEFAULT_MOVE_STEP,
  INITIAL_BOARD_VALUE,
  END_BOARD_VALUE,
  VALID_PLACE_REGEX,
};

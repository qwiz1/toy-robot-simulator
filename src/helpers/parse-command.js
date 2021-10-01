const { Command } = require('../commands/command');
const { Place } = require('../commands/place');
const { Move } = require('../commands/move');
const { TurnLeft } = require('../commands/turn-left');
const { TurnRight } = require('../commands/turn-right');
const { Report } = require('../commands/report');
const { DEFAULT_COMMANDS, VALID_PLACE_REGEX } = require('../constants/constants');

const parseCommand = (input) => {
  if (!input || !input.toString().trim()) {
    return new Command();
  }

  input = input.toString().trim().toUpperCase();

  if (input.startsWith(DEFAULT_COMMANDS.place)) {
    if (VALID_PLACE_REGEX.test(input)) {
      const args = input.split(' ')[1];
      const [x, y, direction] = args.split(',');
      return new Place(parseInt(x), parseInt(y), direction);
    }

    console.log('Unexpected command format.\nExpected PLACE <X>,<Y>,<D>');
    return new Command();

  }

  switch (input) {
    case DEFAULT_COMMANDS.move:
      return new Move();
    case DEFAULT_COMMANDS.right:
      return new TurnRight();
    case DEFAULT_COMMANDS.left:
      return new TurnLeft();
    case DEFAULT_COMMANDS.report:
      return new Report();
    default:
      console.log('Unknown command: ' + input);
      return new Command();
  }
}

module.exports = { parseCommand };
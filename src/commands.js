const { DEFAULT_COMMANDS } = require("./constants/constants");

const runCommand = (command) => {
  switch (command) {
    case DEFAULT_COMMANDS.place:
      return 'You run PLACE command';
    case DEFAULT_COMMANDS.move:
      return 'You run PLACE command';
    case DEFAULT_COMMANDS.right:
      return 'You run PLACE command';
    case DEFAULT_COMMANDS.left:
      return 'You run PLACE command';
    case DEFAULT_COMMANDS.report:
      return 'You run PLACE command';
    default:
      return 'Does not have that command ' + command;
  }
}

module.exports = { runCommand };
const getFormattedCommand = (command) => {
  return command
    .toString()
    .trim()
    .toUpperCase();
};

module.exports = { getFormattedCommand };

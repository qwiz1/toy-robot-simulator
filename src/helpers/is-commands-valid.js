const isCommandsValid = (command) => {
  return /PLACE\s\S{5}|MOVE|LEFT|RIGHT|REPORT/.test(command)
};

module.exports = { isCommandsValid };

const isCommandsValid = (command) => {
  return /PLACE\s\S{4}[N|E|S|W]|MOVE|LEFT|RIGHT|REPORT/.test(command)
};

module.exports = { isCommandsValid };

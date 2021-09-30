const isFirstCommandFormatValid = (command) => {
  return /PLACE\s\S{5}/.test(command);
};

module.exports = {isFirstCommandFormatValid};
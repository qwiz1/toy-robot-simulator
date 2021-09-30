const isFirstCommandFormatValid = (command) => {
  return /PLACE\s\S{4}[N|E|S|W]/.test(command);
};

module.exports = {isFirstCommandFormatValid};
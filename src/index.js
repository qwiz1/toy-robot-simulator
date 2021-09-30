#!/usr/bin/env node
const { runCommand } = require('./commands');
const { CARDINAL_POINTS, DEFAULT_COORDINATE, INITIAL_STEP } = require('./constants/constants');
const { getFormattedCommand } = require('./helpers/get-formatted-command');
const { isCommandsValid } = require('./helpers/is-commands-valid');
const { isFirstCommandFormatValid } = require('./helpers/is-first-command-format-valid');

const runGameSimulation = () => {
  const stdin = process.openStdin();

  let direction = CARDINAL_POINTS.north;
  let coordinate = DEFAULT_COORDINATE;
  let step = INITIAL_STEP;

  stdin.addListener('data', (data) => {
    const command = getFormattedCommand(data);

    if (step === INITIAL_STEP && !isFirstCommandFormatValid(command)) {
      console.log('For begin please enter first command PLACE <coordinateX>,<coordinateY>,<direction[N,E,S,W]>');
      return;
    }

    if(isCommandsValid){
      direction = runCommand(command, direction, coordinate);
      step++;
    }

    console.log(step);
  });
};

runGameSimulation();

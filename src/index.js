#!/usr/bin/env node
const { runCommand } = require('./commands');
const { CARDINAL_POINTS } = require('./constants/constants');
const { getFormattedCommand } = require('./helpers/get-formatted-command');

const runGameSimulation = () => {
  const stdin = process.openStdin();
  let direction = CARDINAL_POINTS.north;

  stdin.addListener('data', (data) => {
    const command = getFormattedCommand(data);
    
    direction = runCommand(command, direction);
  });
};

runGameSimulation();

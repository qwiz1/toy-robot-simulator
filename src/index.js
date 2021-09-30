#!/usr/bin/env node
const { getFormattedCommand } = require('./helpers/get-formatted-command');

const runGameSimulation = () => {
  const stdin = process.openStdin();

  stdin.addListener('data', (data) => {
    const command = getFormattedCommand(data);

    console.log('Your command: ' + command);
  });
};

runGameSimulation();

#!/usr/bin/env node
const { runCommand } = require('./commands');
const { getFormattedCommand } = require('./helpers/get-formatted-command');

const runGameSimulation = () => {
  const stdin = process.openStdin();

  stdin.addListener('data', (data) => {
    const command = getFormattedCommand(data);
    console.log(runCommand(command));
  });
};

runGameSimulation();

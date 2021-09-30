#!/usr/bin/env node
const { parseCommand } = require('./helpers/parse-command');

const runGameSimulation = () => {
  const stdin = process.openStdin();

  let location = null;

  stdin.addListener('data', (data) => {
    const command = parseCommand(data);
    location = command.execute(location);
  });
};

runGameSimulation();

#!/usr/bin/env node

const runGameSimulation = () => {
  let stdin = process.openStdin();

  stdin.addListener('data', (data) => {
    console.log('Your data: ' + data);
  });
};

runGameSimulation();

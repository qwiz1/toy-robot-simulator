const { expect, it } = require('@jest/globals');
const { parseCommand } = require('./parse-command');
const { Command } = require('../commands/command');
const { Place } = require('../commands/place');
const { Move } = require('../commands/move');
const { TurnLeft } = require('../commands/turn-left');
const { TurnRight } = require('../commands/turn-right');
const { Report } = require('../commands/report');
const { Location } = require('../location');

describe('ParseCommand - tests: ', () => {
  it('Should return class Move when passing move command', () => {
    expect(parseCommand('move')).toBeInstanceOf(Move);
  });
  it('Should return class Report when passing report command', () => {
    expect(parseCommand('report')).toBeInstanceOf(Report);
  });
  it('Should return class TurnRight when passing right command', () => {
    expect(parseCommand('right')).toBeInstanceOf(TurnRight);
  });
  it('Should return class TurnLeft when passing left command', () => {
    expect(parseCommand('left')).toBeInstanceOf(TurnLeft);
  });
  it('Should return class Place when passing place command', () => {
    expect(parseCommand('place 1,2,s')).toBeInstanceOf(Place);
  });
  it('Should return default Command when passing wrong input', () => {
    expect(parseCommand('bla-bla')).toBeInstanceOf(Command);
  });
  it('Should return default Command when passing null', () => {
    expect(parseCommand(null)).toBeInstanceOf(Command);
  });
  it('Should initialize place command with correct arguments', () => {
    expect(parseCommand('place 1,1,w').newLocation).toEqual(new Location(1, 1, 'W'));
  })
  it('Should return default command when passing invalid arguments of place command', () => {
    expect(parseCommand('place blabla')).toBeInstanceOf(Command);
  })
});
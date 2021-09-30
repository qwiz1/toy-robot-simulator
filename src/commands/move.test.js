const { expect, it } = require('@jest/globals');
const { Move } = require('./move');
const { Location } = require('../location');

const move = new Move();

describe('Move - tests: ', () => {
  it('Should move towards west', () => {
    expect(move.execute(new Location(2, 2, 'W'))).toEqual(new Location(1, 2, 'W'));
  });
  it('Should move towards north', () => {
    expect(move.execute(new Location(2, 2, 'N'))).toEqual(new Location(2, 3, 'N'));
  });
  it('Should move towards east', () => {
    expect(move.execute(new Location(2, 2, 'E'))).toEqual(new Location(3, 2, 'E'));
  });
  it('Should move towards south', () => {
    expect(move.execute(new Location(2, 2, 'S'))).toEqual(new Location(2, 1, 'S'));
  });
  it('Should not move out of the board', () => {
    expect(move.execute(new Location(0, 0, 'S'))).toEqual(new Location(0, 0, 'S'));
    expect(move.execute(new Location(0, 0, 'W'))).toEqual(new Location(0, 0, 'W'));
    expect(move.execute(new Location(4, 4, 'N'))).toEqual(new Location(4, 4, 'N'));
    expect(move.execute(new Location(4, 4, 'E'))).toEqual(new Location(4, 4, 'E'));
  })
});
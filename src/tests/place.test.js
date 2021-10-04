const { expect, it } = require('@jest/globals');
const { Place } = require('../commands/place');
const { Location } = require('../location');

describe('Report - tests: ', () => {

  it('Should return new location when it is valid', () => {
    expect(new Place(1, 2, 'W').execute(null)).toEqual(new Location(1, 2, 'W'));
  });
  it('Should return given location when the new location is not valid', () => {
    expect(new Place(-1, 1, 'S').execute(new Location(3, 2, 'S'))).toEqual(new Location(3, 2, 'S'));
  })
});

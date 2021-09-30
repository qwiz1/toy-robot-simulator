const { expect, it } = require('@jest/globals');
const { TurnLeft } = require('./turn-left');
const { Location } = require('../location');

const turnLeft= new TurnLeft();

describe('TurnLeft - tests: ', () => {
  it('Direction should be equal to North when turning left from West', () => {
    expect(turnLeft.execute(new Location(0, 0, 'N')).direction).toEqual('W');
  });
  it('Direction should be equal to West when turning left from South', () => {
    expect(turnLeft.execute(new Location(0, 0, 'W')).direction).toEqual('S');
  });
  it('Direction should be equal to South when turning left from East', () => {
    expect(turnLeft.execute(new Location(0, 0, 'S')).direction).toEqual('E');
  });
  it('Direction should be equal to East when turning left from North', () => {
    expect(turnLeft.execute(new Location(0, 0, 'E')).direction).toEqual('N');
  });
  it('X and Y should remain the same when turning left', () => {
    let result = turnLeft.execute(new Location(1, 3, 'N'));
    expect(result.x).toEqual(1);
    expect(result.y).toEqual(3);
    
    result = turnLeft.execute(new Location(4, 0, 'N'));
    expect(result.x).toEqual(4);
    expect(result.y).toEqual(0);
  })
});

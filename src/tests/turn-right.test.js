const { expect, it } = require('@jest/globals');
const { TurnRight } = require('../commands/turn-right');
const { Location } = require('../location');

const turnRight = new TurnRight();

describe('TurnRight - tests: ', () => {
  it('Direction should be equal to North when turning right from West', () => {
    expect(turnRight.execute(new Location(0, 0, 'W')).direction).toEqual('N');
  });
  it('Direction should be equal to West when turning right from South', () => {
    expect(turnRight.execute(new Location(0, 0, 'S')).direction).toEqual('W');
  });
  it('Direction should be equal to South when turning right from East', () => {
    expect(turnRight.execute(new Location(0, 0, 'E')).direction).toEqual('S');
  });
  it('Direction should be equal to East when turning right from North', () => {
    expect(turnRight.execute(new Location(0, 0, 'N')).direction).toEqual('E');
  });
  it('X and Y should remain the same when turning right', () => {
    let result = turnRight.execute(new Location(1, 3, 'N'));
    expect(result.x).toEqual(1);
    expect(result.y).toEqual(3);
    
    result = turnRight.execute(new Location(4, 0, 'N'));
    expect(result.x).toEqual(4);
    expect(result.y).toEqual(0);
  })
});

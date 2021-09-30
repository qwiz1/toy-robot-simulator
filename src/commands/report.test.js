const { expect, it } = require('@jest/globals');
const { Report } = require('./report');
const { Location } = require('../location');

const report = new Report();

describe('Report - tests: ', () => {
  it('Should log current location when executed', () => {
    console.log = jest.fn();
    report.execute(new Location(1, 1, 'S'));
    expect(console.log).toHaveBeenCalledWith('REPORT: 1, 1, S');
  });

  it('Should not log anything when location is null', () => {
    console.log = jest.fn();
    report.execute(null);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('Should not modify the location when called report', () => {
    expect(report.execute(new Location(1, 1, 'S'))).toEqual(new Location(1, 1, 'S'));
  });
  
});
const DEFAULTS = require('./jest.config.defaults');

module.exports = {
  ...DEFAULTS,
  testMatch: ['<rootDir>/src/**/__tests__/(*.)+visual.[jt]s?(x)'],
};

const DEFAULTS = require('./jest.config.defaults');

module.exports = {
  projects: [
    { ...DEFAULTS, preset: 'jest-expo/ios' },
    { ...DEFAULTS, preset: 'jest-expo/android' },
    { ...DEFAULTS, preset: 'jest-expo/web' },
  ],
};

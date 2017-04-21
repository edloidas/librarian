const config = require('../src/config');

describe('Template test', () => {
  test('Should be true', () => {
    expect(config.token).toBe(undefined);
  });
});

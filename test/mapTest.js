const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {

  it('returns a new array with each element operated on by the callback', () => {
    assert.deepEqual(map([6, 3], x => x + 2), [8, 5]);
  });
  
});
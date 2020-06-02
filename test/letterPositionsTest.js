const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns a list of all positions of a given letter', () => {
    assert.deepEqual(letterPositions("lighthouse in the house")['h'], [3, 5, 15, 18]);
  });
});

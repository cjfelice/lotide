
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');


describe('#assertArraysEqual', () => {

  it('returns a confirmation when comparing [1, 2, 3, "bug"] and [1, 2, 3, "bug"]', () => {
    assert.strictEqual((assertArraysEqual([1, 2, 3, "bug"], [1, 2, 3, "bug"])), `✅ Assertion Passed: 1,2,3,bug === 1,2,3,bug`);
  });

  it('returns a fail message when comparing ([1, "2", 3] and [1, 2, 3])', () => {
    assert.deepEqual(assertArraysEqual([1, '2', 3], [1, 2, 3]), `❌ Assertion Failed: 1,2,3 !== 1,2,3`);
  });

  it('returns a fail message when comparing ([1, 2, 3, 4] and [1, 2, 3])', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3]), `❌ Assertion Failed: 1,2,3,4 !== 1,2,3`);
  });

});

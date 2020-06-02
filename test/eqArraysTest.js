const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe('#eqArrays', () => {

  it('returns true if two given arrays are identical', () => {
    assert.strictEqual((eqArrays([1, 2, 3, "bug"], [1, 2, 3, "bug"])), true);
  });

  it('returns false if two given arrays are not identical', () => {
    assert.strictEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
  });

});
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe('#eqArrays', () => {

  it('returns true if two given arrays are identical', () => {
    assert.strictEqual((eqArrays([1, 2, 3, "bug"], [1, 2, 3, "bug"])), true);
  });

  it('returns false if two given arrays are not identical', () => {
    assert.strictEqual(eqArrays([1, '2', 3], [1, 2, 3]), false);
  });

  it('returns true if given two nested arrays that are identical', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns false if given two nested arrays that are not identical', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('returns false if given two differently nested arrays that look the same but are not identical', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

});
const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

describe('#middle', () => {

  it('returns ["duck"] for [3, 5, "duck", 87, "emu"]', () => {
    assert.deepEqual(middle([3, 5, 'duck', 87, 'emu']), ['duck']);
  });

  it('returns [] for [3]', () => {
    assert.deepEqual(middle([3]), []);
  });

  it('returns [2, "chicken"] for [3, 2, "chicken", 498]', () => {
    assert.deepEqual(middle([3, 2, 'chicken', 498]), [2, 'chicken']);
  });

});

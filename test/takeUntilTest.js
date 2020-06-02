const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, '7', 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe('#takeUntil', () => {
  it('returns an identical array of numbers that stops at a given number', () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, '7', 2 ]);
  });
  it('returns an identical array of strings that stops at a given string', () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});

const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('removes array nests and returns all elements in a new array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});

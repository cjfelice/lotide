const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {

  it('returns an array of numbers with given numbers removed', () => {
    assert.deepEqual((without([1, 2, 4, 6], [2, 6])), [1, 4]);
  });

  it('returns an array of strings with given strings removed', () => {
    assert.deepEqual((without(['chicken', 'duck', 'goose', 'squab'], ['duck', 'squab', 'turkey'])), ['chicken', 'goose']);
  });

});

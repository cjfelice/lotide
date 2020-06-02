const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('returns a key when its value is called', () => {
    assert.strictEqual(findKeyByValue({ dog: "black", frog: "green", wolf: "grey", fish: "yellow", elephant: "grey" }, "grey"), 'wolf');
  });
});

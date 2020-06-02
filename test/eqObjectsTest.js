const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true when comparing equal objects', () => {
    assert.strictEqual(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it('returns false when objects are not equal', () => {
    assert.strictEqual(eqObjects({ a: "1", b: "2" }, { a: "3", b: "2"}), false);
  });
  it('returns undefined for undefined', () => {
    assert.strictEqual(eqObjects([], ''), true);
  });
});
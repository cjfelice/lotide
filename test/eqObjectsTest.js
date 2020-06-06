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
  it('returns true when comparing equal nested objects', () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it('returns false when comparing differently nested objects', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it('returns false when comparing nested and un-nested objects', () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
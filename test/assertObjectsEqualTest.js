const assert = require('chai').assert;

const assertObjectsEqual = require('../assertObjectsEqual');


describe('#assertObjectsEqual', () => {

  it('returns a confirmation when comparing { a: "1", b: "2" } and  { b: "2", a: "1" }', () => {
    assert.deepEqual(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }), `✅ Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }`);
  });

  it('returns a fail message when comparing { c: "1", d: "6" } and { a: "3", b: "2"}', () => {
    assert.deepEqual(assertObjectsEqual({ c: "1", d: "6" }, {a: "3", b: "2"}), `❌ Assertion Failed: { c: '1', d: '6' } !== { a: '3', b: '2' }`);
  });

});
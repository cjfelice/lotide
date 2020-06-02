const assert  = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('returns 2 for array length of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it('returns "Lighthouse" for arr[0] of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] for ["shrimp"]', () => {
    assert.deepEqual(tail(["shrimp"]), []);
  });

});
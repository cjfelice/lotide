const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe('#assertEqual', () => {

  it('returns fail when comparing "Lighthouse Labs" & "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), `❌ Assertion Failed: Lighthouse Labs !== Bootcamp`);
  });
  
  it('returns pass when comparing 2 & 2', () => {
    assert.strictEqual(assertEqual(2, 2), `✅ Assertion Passed: 2 === 2`);
  });

});

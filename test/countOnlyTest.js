const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Fang"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe('#countOnly', () => {
  
  it('returns a count of how many of a given value in an array', () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it('returns undefined if a given value is not present in an array', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  
});
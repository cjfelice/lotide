const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true) {
    return `✅ Assertion Passed: ${firstArr} === ${secondArr}`;
  } else {
    return `❌ Assertion Failed: ${firstArr} !== ${secondArr}`;
  }
};

module.exports = assertArraysEqual;

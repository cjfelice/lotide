const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true) {
    console.log(`✅ Assertion Passed: ${firstArr} === ${secondArr}`);
    return `✅ Assertion Passed: ${firstArr} === ${secondArr}`;
  } else {
    console.log(`❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
    return `❌ Assertion Failed: ${firstArr} !== ${secondArr}`;
  }
};

module.exports = assertArraysEqual;

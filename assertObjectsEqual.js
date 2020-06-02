const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(firstObj, secondObj) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObj, secondObj) === true) {
    return `✅ Assertion Passed: ${inspect(firstObj)} === ${inspect(secondObj)}`;
  } else {
    return `❌ Assertion Failed: ${inspect(firstObj)} !== ${inspect(secondObj)}`;
  }
};

module.exports = assertObjectsEqual;

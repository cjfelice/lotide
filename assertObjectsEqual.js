const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(firstObj, secondObj) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObj, secondObj) === true) {
    console.log(`✅ Assertion Passed: ${inspect(firstObj)} === ${inspect(secondObj)}`);
    return `✅ Assertion Passed: ${inspect(firstObj)} === ${inspect(secondObj)}`;
  } else {
    console.log(`❌ Assertion Failed: ${inspect(firstObj)} !== ${inspect(secondObj)}`);
    return `❌ Assertion Failed: ${inspect(firstObj)} !== ${inspect(secondObj)}`;
  }
};

module.exports = assertObjectsEqual;

const eqArrays = function(firstArr, secondArr) {
  let arrayTest = true;
  if (firstArr.length !== secondArr.length) {
    arrayTest = false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      arrayTest = false;
    }
  }
  return arrayTest;
};

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let item of array1) {
    if (Array.isArray(object1[item])) {
      if (Array.isArray(object2[item])) {
        if (eqArrays(object1[item], object2[item]) === false) {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(firstObj, secondObj) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObj, secondObj) === true) {
    console.log(`✅ Assertion Passed: ${inspect(firstObj)} === ${inspect(secondObj)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(firstObj)} !== ${inspect(secondObj)}`);
  }
};

const y = { a: "1", b: "2" };
const not = { b: "2", a: "1" };
const just = { a: "3", b: "2"};
const copy = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(y, not);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd2, just);
assertObjectsEqual(copy, copy);
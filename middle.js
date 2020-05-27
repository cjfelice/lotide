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

const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true) {
    console.log(`✅ Assertion Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`❌ Assertion Failed: ${firstArr} !== ${secondArr}`);
  }
};

const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    newArray = [];
  } else {
    if (array.length % 2 === 0) {
      newArray.push(array[((array.length / 2) - 1)]);
      newArray.push(array[array.length / 2]);
    } else {
      newArray.push(array[Math.round((array.length / 2) - 1)]);
    }
  }
  return newArray;
};

assertArraysEqual(middle([3]), [2, 1, 'chicken']);
assertArraysEqual(middle([3, 2, 'chicken', 498]), [2, 'chicken']);
assertArraysEqual(middle([3]), []);
assertArraysEqual(middle([3, 5, 'duck', 87, 'emu']), ['duck']);
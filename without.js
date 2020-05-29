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

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newArray.splice(i, i);
      }
    }
  }
  return newArray;
};

assertArraysEqual((without([1, 2, 4, 6], [2, 6, 'chicken'])), [1, 4]);
assertArraysEqual((without(['chicken', 'duck', 'goose', 'squab'], ['duck', 'squab', 'turkey'])), ['chicken', 'goose']);
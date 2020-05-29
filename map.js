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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't']);
assertArraysEqual(map([5, 4, 21, 9], reduce => (reduce - 1)), [4, 3, 20, 8]);
assertArraysEqual(map(['fast', 'slow', 'dumb', 'smart'], increase => (increase + 'er')), ['faster', 'slower', 'dumber', 'smarter']);

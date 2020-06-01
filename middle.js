const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

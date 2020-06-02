
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
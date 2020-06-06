
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);

  if (array1.length !== array2.length) {
    return false;
  }
  for (let item of array1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if (eqArrays(object1[item], object2[item]) === false) {
          return false;
        }
      } else if (typeof(object1[item]) === 'object' && typeof(object2[item]) === 'object') {
        if(!eqObjects(object1[item], object2[item])) {
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

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));

module.exports = eqObjects;
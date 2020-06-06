
const eqArrays = function(firstArr, secondArr) {
  let arrayTest = true;
  if (firstArr.length !== secondArr.length) {
    arrayTest = false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (Array.isArray(firstArr[i]) && Array.isArray(secondArr[i])) {
      if(!eqArrays(firstArr[i], secondArr[i])) {
        arrayTest = false;
      }
    } else if (firstArr[i] !== secondArr[i]) {
      arrayTest = false;
    }
  }
  return arrayTest;
};

module.exports = eqArrays;
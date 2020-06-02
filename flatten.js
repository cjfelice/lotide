
const flatten = function(array) {
  const newArr = [];
  const flattener = (array) => {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        flattener(item);
      } else {
        newArr.push(item);
      }
    });
  }
  flattener(array);
  return newArr;
};

module.exports = flatten

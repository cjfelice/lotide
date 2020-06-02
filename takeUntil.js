
const takeUntil = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array.filter(callback)[0]) {
      newArr.push(array[i]);
    } else {
      return newArr;
    }
  }
  return newArr;
};

module.exports = takeUntil;
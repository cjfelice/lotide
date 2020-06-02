
const findKeyByValue = function(object, value) {
  keyList = Object.keys(object);
  for (let i = 0; i < keyList.length; i++) {
    if (object[keyList[i]] === value) {
      return keyList[i];
    }
  } 
};

module.exports = findKeyByValue;
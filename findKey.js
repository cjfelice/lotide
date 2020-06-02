
const findKey = (object, callback) => {
  const keyList = Object.keys(object);
  for (const key of keyList) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
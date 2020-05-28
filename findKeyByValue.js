const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  keyList = Object.keys(object);
  for (let i = 0; i < keyList.length; i++) {
    if (object[keyList[i]] === value) {
      return keyList[i];
    }
  } 
};

assertEqual(findKeyByValue({ dog: "black", frog: "green", wolf: "grey", fish: "yellow", elephant: "grey" }, "grey"), "wolf");
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(sentence) {
  const letterCount = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (letterCount[sentence[i]]) {
        letterCount[sentence[i]] += 1;
      } else {
        letterCount[sentence[i]] = 1;
      }
    }
  }
  return letterCount;
};
console.log(countLetter('lighthouse in the house'));
assertEqual(countLetter('lighthouse in the house')['h'], 4);
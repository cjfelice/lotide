
const countLetters = function(sentence) {
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
console.log(countLetters('lighthouse in the house'));
module.exports = countLetters;
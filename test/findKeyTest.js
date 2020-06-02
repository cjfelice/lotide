const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('returns a key when its value is called', () => {
    assert.strictEqual(findKey({dog: "fred", lizard: "cheech", bird: "lamer"}, x => x === "cheech"), 'lizard');
  });
  it('returns a key when its value tree is called', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });
});
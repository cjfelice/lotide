const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([3]), [2, 1, 'chicken']);
assertArraysEqual(middle([3, 2, 'chicken', 498]), [2, 'chicken']);
assertArraysEqual(middle([3]), []);
assertArraysEqual(middle([3, 5, 'duck', 87, 'emu']), ['duck']);
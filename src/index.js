var someNames = require('./some-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: someNames,
    random: uniqueRandomArray(someNames),
};
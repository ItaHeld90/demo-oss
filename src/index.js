import someNames from './some-names.json';
import uniqueRandomArray from 'unique-random-array';

module.exports = {
    all: someNames,
    random: uniqueRandomArray(someNames),
};
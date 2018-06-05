var someNames = require('./index');
var expect = require('chai').expect;

describe('some names', function() {
    describe('all', function() {
        it('check array of strings', function() {
            expect(someNames.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === "string";
                });
            }
        });

        it('contains Rico Sanchez', function() {
            expect(someNames.all).to.contain('Rico Sanchez');
        });
    });

    describe('random', function() {
        it('simple', function() {
            var randomName = someNames.random();
            expect(someNames.all).to.contain(randomName);
        });
    });
});
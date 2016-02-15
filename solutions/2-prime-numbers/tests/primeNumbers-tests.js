import chai from 'chai';
const assert = chai.assert;
import {prime, isPrime} from '../primeNumbers';

describe('Prime numbers', function () {
    describe('isPrime Function', function () {
        it('shouls exist', function (done) {
            assert.isDefined(isPrime);
            done();
        });
        it('should return true is the number is prime', function (done) {
            assert.isTrue(isPrime(5));
            assert.isTrue(isPrime(17));
            assert.isTrue(isPrime(19));
            done();
        });
        it('should return false is the number is not prime', function (done) {
            assert.isFalse(isPrime(15));
            assert.isFalse(isPrime(25));
            assert.isFalse(isPrime(40));
            done();
        });
    });
    describe('prime Function', function () {
        it('should exist', function (done) {
            assert.isDefined(prime);
            done();
        });
        it('should return an array', function (done) {
            assert.isArray(prime(0, 10));
            done();
        });
        it('should return null if the max number is 1', function (done) {
            assert.isNull(prime(0, 1));
            done();
        });
        it('should return an array with all prime number is a range', function (done) {
            assert.deepEqual(prime(0, 10), [2, 3, 5, 7]);
            done();
        });
    });
});

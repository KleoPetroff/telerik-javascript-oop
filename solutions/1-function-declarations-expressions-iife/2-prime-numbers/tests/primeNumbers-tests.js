import chai from 'chai';
import {prime, isPrime} from '../primeNumbers';

const assert = chai.assert;

describe('Prime numbers', () => {
  describe('isPrime Function', () => {
    it('shouls exist', (done) => {
      assert.isDefined(isPrime);
      done();
    });
    it('should return true is the number is prime', (done) => {
      assert.isTrue(isPrime(5));
      assert.isTrue(isPrime(17));
      assert.isTrue(isPrime(19));
      done();
    });
    it('should return false is the number is not prime', (done) => {
      assert.isFalse(isPrime(15));
      assert.isFalse(isPrime(25));
      assert.isFalse(isPrime(40));
      done();
    });
  });
  describe('prime Function', () => {
    it('should exist', (done) => {
      assert.isDefined(prime);
      done();
    });
    it('should return an array', (done) => {
      assert.isArray(prime(0, 10));
      done();
    });
    it('should return null if the max number is 1', (done) => {
      assert.isNull(prime(0, 1));
      done();
    });
    it('should return an array with all prime number is a range', (done) => {
      assert.deepEqual(prime(0, 10), [2, 3, 5, 7]);
      done();
    });
  });
});

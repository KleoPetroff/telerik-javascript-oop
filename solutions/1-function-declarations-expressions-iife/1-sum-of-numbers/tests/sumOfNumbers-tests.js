import chai from 'chai';
import sumArray from '../sumOfNumbers';

const assert = chai.assert;


describe('Sum of Numbers', () => {
  it('should exist', (done) => {
    assert.isDefined(sumArray);
    done();
  });
  it('should throw if no arguments are passed', (done) => {
    assert.throw(() => {
      sumArray();
    }, Error, 'No arguments passed');
    done();
  });
  it('should throw if now all elements are convertable to numbers', (done) => {
    assert.throw(() => {
      sumArray([1, 2, 44, [2, 4]]);
    }, Error, 'Some elements of the argument is not convertible to Number');
    done();
  });
  it('should return the sum of all number elements of the array', (done) => {
    assert.equal(sumArray([1, 2, 3, 4, 5, 6]), 21);
    done();
  });
  it('should convert strings to numbers and sum them up', (done) => {
    assert.equal(sumArray(['1', '2', '3']), 6);
    done();
  });
});

import { expect } from 'chai';
import 'mocha';
import { a, b, a1, b1, food, others, a3, b3, tostring1, tostring2 } from './array-destructuring';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(a1).to.eql(a) && expect(b1).to.eql(b);
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(food).to.include.members(others, a3);
  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(tostring1 + tostring2).to.eql('hello taylor!')
  });
});

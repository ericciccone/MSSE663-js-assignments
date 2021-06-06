import { expect } from 'chai';
import { name, title, object, user, id, city, state, nestedObject, nestedObjectCopy, obj } from './object-destructuring'
import 'mocha';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect({name}).to.have.a.property('elvis')
    expect({title}).to.have.a.property('hip swinger')
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect({user}).to.have.a.property('elvis')
    expect({city}).to.have.a.property('denver')
    expect({state}).to.have.a.property('colorado')
    expect({id}).to.have.a.property('1')
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {});
    expect(obj.greeting).to.have.a.property('hello')
    expect(obj.name).to.have.a.property('taylor')

  it('#4 should construct a statement from the given object', () => {
    expect({nestedObject}).to.deep.equal({nestedObjectCopy})
  });
});

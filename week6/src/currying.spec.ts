import { expect } from 'chai';
import { curryMe, curried, doMath, hoistMath, ninjasOne, ninjasTwo, twoGroups, statusTypes, ninjasWithStatus} from './currying';
import 'mocha';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    const test1a = curryMe('testing', 'one', 'two three');
    const test1b = curried('testing')('one')('two three');

    expect(test1a).to.eql(test1b);
  });

  it('#2 should output the same result as the original function', () => {
    const test2a = doMath(1)(2)(3);
    const test2b = hoistMath(1,2,3);

    expect(test2a).to.eql(test2b);
  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    expect(twoGroups).to.eql([
      { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' } 
    ])
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    expect(ninjasWithStatus(ninjasOne)(ninjasTwo)).to.eql([
    { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
    { name: 'Donatello', belt: 'green', status: 'warrior' },
    { name: 'Raphael', belt: 'black', status: 'sensei' },
    { name: 'Leonardo', belt: 'black', status: 'sensei' },
    { name: 'Mr. Miyagi', belt: 'black', status: 'sensei' },
    { name: 'Rocky', belt: 'black', status: 'sensei' },
    { name: 'Colt', belt: 'green', status: 'warrior' },
    { name: 'Tum Tum', belt: 'white', status: 'grasshopper' },
    { name: 'Haru', belt: 'white', status: 'grasshopper' },
    { name: 'The Bride', belt: 'black', status: 'sensei' },
    { name: 'Cammy', belt: 'black', status: 'sensei' },
    { name: 'Wong Fei-hung', belt: 'green', status: 'warrior' },
    { name: 'Michelangelo', belt: 'white', status: 'grasshopper' },
    { name: 'Donatello', belt: 'green', status: 'warrior'},
    { name: 'Raphael', belt: 'black', status: 'sensei' },
    { name: 'Jim', belt: 'black', status: 'sensei' },
    { name: 'The Rat', belt: 'black', status: 'sensei' }
    ]);
  });
});

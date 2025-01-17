import { expect } from 'chai';
import 'mocha';

import { originalNumbers, numbers } from './spread';
import { numbersCopy } from './spread';
import { winners } from './spread';
import { runnerUps } from './spread';
import { combineArray } from './spread';
import { originalPersons } from './spread';
import { combineObjects } from './spread';
import { originalUpdates } from './spread';
import { refactor } from './spread';


describe('Test for spread.ts', () => {
    it('should output array 1, 2, 3, 4, 5', () => {
        expect(numbersCopy).to.eql(numbers);
    })

    it('should combine arrays', () => {
        expect(combineArray).to.eql(winners.concat(runnerUps));
    })

    it('should combine two objects', () => {
        expect(combineObjects).to.eql(originalPersons);
    })

    it('should update id1 task to Do the other thing... again', () => {
        expect(refactor).to.eql(originalUpdates);
    })

})
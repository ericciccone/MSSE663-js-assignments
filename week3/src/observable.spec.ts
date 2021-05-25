import 'mocha';
import { expect } from 'chai';
import { printArray } from './observables';

describe('Test for app.ts', () => {
    it('should output the array 1 3 5 7 9', () => {
            expect(printArray.subscribe(console.log)).to.equal([1,3,5,7,9]);
    })
})

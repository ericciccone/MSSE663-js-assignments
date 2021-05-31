import { expect } from 'chai';
import { it } from 'mocha';
import 'mocha';
import { Bengal } from './app';

describe('Test for app.ts', () => {
    const bengal = new Bengal("rosettes", "sparrow", 6);

    it('should output Cat\'s name', () => {
            expect(bengal.name).to.equal('sparrow');
    })

    it('should output Cat\'s age', () => {
        expect(bengal.age).to.equal(6);
    })

    it('shoud output Cat\'s markings', () => {
        expect(bengal.markings).to.equal("rosettes");
    })
    
    it('shoud evaluate true', () => {
        expect(bengal.isComplete("rosettes", "sparrow", 6)).to.equal(true);
    })
})

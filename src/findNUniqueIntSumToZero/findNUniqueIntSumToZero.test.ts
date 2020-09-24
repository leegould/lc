import { expect } from 'chai';
import { sumZero } from './findNUniqueIntSumToZero';

describe('Find N Unique Integers Sum up to Zero', () => {
    it('runs as expected', () => {
        const n = 5;
        const result = sumZero(n);
        const expected = [0,1,-1,2,-2];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const n = 3;
        const result = sumZero(n);
        const expected = [0,1,-1];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const n = 1;
        const result = sumZero(n);
        const expected = [0];
        expect(result).to.deep.equal(expected);
    });
});

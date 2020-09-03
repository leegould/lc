import { expect } from 'chai';
import { selfDividingNumbers } from './selfDividingNumbers';

describe('selfDividingNumbers', () => {
    it('runs as expected', () => {
        const left = 1;
        const right = 22;
        const result = selfDividingNumbers(left, right);
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22];
        expect(result).to.deep.equal(expected);
    });
});

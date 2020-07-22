import { expect } from 'chai';
import { countBits } from './countingBits';

describe('countingBits', () => {
    it('runs as expected', () => {
        const input = 2;
        const result = countBits(input);
        const expected = [0,1,1];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with larger example', () => {
        const input = 5;
        const result = countBits(input);
        const expected = [0,1,1,2,1,2];
        expect(result).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { generateTheString } from './generateStringWithCharOddCount';

describe('generateStringWithCharOddCounts', () => {
    it('runs as expected', () => {
        const input = 4;
        const result = generateTheString(input);
        const expected = 'aaab';
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 2;
        const result = generateTheString(input);
        const expected = 'ab';
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = 7;
        const result = generateTheString(input);
        const expected = 'aaaaaaa';
        expect(result).to.equal(expected);
    });
});

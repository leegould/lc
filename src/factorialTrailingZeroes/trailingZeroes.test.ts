import { expect } from 'chai';
import { trailingZeroes } from './trailingZeroes';

describe('Factorial Trailing Zeroes', () => {
    it('runs as expected', () => {
        const input = 3;
        const result = trailingZeroes(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with a zero', () => {
        const input = 5;
        const result = trailingZeroes(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });

    it('runs as expected with value between', () => {
        const input = 8;
        const result = trailingZeroes(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
});

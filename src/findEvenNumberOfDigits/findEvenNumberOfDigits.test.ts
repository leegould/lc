import { expect } from 'chai';
import { findNumbers } from './findEvenNumberOfDigits';

describe('findEvenNumberOfDigits', () => {
    it('runs as expected', () => {
        const input = [12,345,2,6,7896];
        const expected = 2;
        const result = findNumbers(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [555,901,482,1771];
        const expected = 1;
        const result = findNumbers(input);
        expect(result).to.equal(expected);
    });
});

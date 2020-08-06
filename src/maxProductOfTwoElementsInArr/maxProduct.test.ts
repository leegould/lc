import { expect } from 'chai';
import { maxProduct } from './maxProduct';

describe('maxProductOfTwoElementsInArr', () => {
    it('runs as expected', () => {
        const input = [3,4,5,2];
        const result = maxProduct(input);
        const expected = 12;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,5,4,5];
        const result = maxProduct(input);
        const expected = 16;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [3,7];
        const result = maxProduct(input);
        const expected = 12;
        expect(result).to.equal(expected);
    });
});

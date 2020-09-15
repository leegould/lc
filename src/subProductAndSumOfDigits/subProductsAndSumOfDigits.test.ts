import { expect } from 'chai';
import { subtractProductAndSum } from './subProductsAndSumOfDigits';

describe('Subtract the Product and Sum of Digits of an Integer', () => {
    it('runs as expected', () => {
        const input = 234;
        const result = subtractProductAndSum(input);
        const expected = 15;
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 4421;
        const result = subtractProductAndSum(input);
        const expected = 21;
        expect(result).to.deep.equal(expected);
    });
});

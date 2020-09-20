import { expect } from 'chai';
import { maxCoins } from './maxCoins';

describe('Maximum number of coins you can get', () => {
    it('runs as expected', () => {
        const input = [2,4,1,2,7,8];
        const result = maxCoins(input);
        const expected = 9;
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [2,4,5];
        const result = maxCoins(input);
        const expected = 4;
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [9,8,7,6,5,1,2,3,4];
        const result = maxCoins(input);
        const expected = 18;
        expect(result).to.deep.equal(expected);
    });
});

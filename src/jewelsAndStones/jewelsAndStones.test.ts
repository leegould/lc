import { expect } from 'chai';
import { numJewelsInStones } from './jewelsAndStones';

describe('jewelsAndStones', () => {
    it('runs as expected', () => {
        const J = 'aA';
        const S = 'aAAbbbb';
        const result = numJewelsInStones(J, S);
        const expected = 3;
        expect(result).to.equal(expected);
    });
    it('runs as expected with no matches', () => {
        const J = 'z';
        const S = 'ZZ';
        const result = numJewelsInStones(J, S);
        const expected = 0;
        expect(result).to.equal(expected);
    });
});

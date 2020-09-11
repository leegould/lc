import { expect } from 'chai';
import { kidsWithCandies } from './kidsWithGreatestCandies';

describe('Kids With the Greatest Number of Candies', () => {
    it('runs as expected', () => {
        const input = [2,3,5,1,3];
        const extraCandies = 3;
        const result = kidsWithCandies(input, extraCandies);
        const expected = [true,true,true,false,true];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [4,2,1,1,2];
        const extraCandies = 1;
        const result = kidsWithCandies(input, extraCandies);
        const expected = [true,false,false,false,false];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [12,1,12];
        const extraCandies = 10;
        const result = kidsWithCandies(input, extraCandies);
        const expected = [true,false,true];
        expect(result).to.deep.equal(expected);
    });
});

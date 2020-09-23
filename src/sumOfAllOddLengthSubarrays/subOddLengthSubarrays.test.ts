import { expect } from 'chai';
import { sumOddLengthSubarrays } from './sumOddLengthSubarrays';

describe('Sum of all odd length subarrays', () => {
    it('runs as expected', () => {
        const input = [1,4,2,5,3];
        const result = sumOddLengthSubarrays(input);
        const expected = 58;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,2];
        const result = sumOddLengthSubarrays(input);
        const expected = 3;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [10,11,12];
        const result = sumOddLengthSubarrays(input);
        const expected = 66;
        expect(result).to.equal(expected);
    });
});

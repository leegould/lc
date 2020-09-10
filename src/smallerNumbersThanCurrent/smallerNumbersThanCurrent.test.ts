import { expect } from 'chai';
import { smallerNumbersThanCurrent } from './smallerNumbersThanCurrent';

describe('smallerNumbersThanCurrent', () => {
    it('runs as expected', () => {
        const input = [8,1,2,2,3];
        const result = smallerNumbersThanCurrent(input);
        const expected = [4,0,1,1,3];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [6,5,4,8];
        const result = smallerNumbersThanCurrent(input);
        const expected = [2,1,0,3];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example.', () => {
        const input = [7,7,7,7];
        const result = smallerNumbersThanCurrent(input);
        const expected = [0,0,0,0];
        expect(result).to.deep.equal(expected);
    });
});

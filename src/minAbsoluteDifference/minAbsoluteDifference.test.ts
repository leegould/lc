import { expect } from 'chai';
import { minimumAbsDifference } from './minAbsoluteDifference';

describe('Minimum Absolute Difference', () => {
    it('runs as expected', () => {
        const input = [4,2,1,3];
        const result = minimumAbsDifference(input);
        const expected = [[1,2],[2,3],[3,4]];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,3,6,10,15];
        const result = minimumAbsDifference(input);
        const expected = [[1,3]];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [3,8,-10,23,19,-4,-14,27];
        const result = minimumAbsDifference(input);
        const expected = [[-14,-10],[19,23],[23,27]];
        expect(result).to.deep.equal(expected);
    });
});

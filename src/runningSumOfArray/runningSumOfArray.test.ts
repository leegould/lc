import { expect } from 'chai';
import { runningSum } from './runningSumOfArray';

describe('runningSumOfArray', () => {
    it('runs as expected', () => {
        const input = [1,2,3,4];
        const result = runningSum(input);
        const expected = [1,3,6,10];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,1,1,1,1];
        const result = runningSum(input);
        const expected = [1,2,3,4,5];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [3,1,2,10,1];
        const result = runningSum(input);
        const expected = [3,4,6,16,17];
        expect(result).to.deep.equal(expected);
    });
});

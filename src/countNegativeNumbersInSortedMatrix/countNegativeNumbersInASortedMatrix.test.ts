import { expect } from 'chai';
import { countNegatives } from './countNegativeNumbersInASortedMatrix';

describe('Find N Unique Integers Sum up to Zerorix', () => {
    it('runs as expected', () => {
        const grid = [[4,3,2,-1], [3,2,1,-1], [1,1,-1,-2], [-1,-1,-2,-3]];
        const result = countNegatives(grid);
        const expected = 8;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const grid = [[3,2],[1,0]];
        const result = countNegatives(grid);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const grid = [[1,-1],[-1,-1]];
        const result = countNegatives(grid);
        const expected = 3;
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const grid = [[-1]];
        const result = countNegatives(grid);
        const expected = 1;
        expect(result).to.equal(expected);
    });
});

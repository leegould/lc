import { expect } from 'chai';
import { maxArea } from './containerWithMostWater';

describe('containerWithMostWater', () => {
    it('runs as expected', () => {
        const input = [1,8,6,2,5,4,8,3,7];
        const result = maxArea(input);
        const expected = 49;
        expect(result).to.equal(expected);
    });
});

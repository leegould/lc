import { expect } from 'chai';
import { islandPerimeter } from './islandPerimeter';

describe('islandPerimeter', () => {
    it('runs as expected', () => {
        const input = [
            [0,1,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [1,1,0,0],
        ];
        const result = islandPerimeter(input);
        const expected = 16;
        expect(result).to.equal(expected);
    });
});

import { expect } from 'chai';
import { sortedSquares } from '../squaresOfASortedArray/squaresOfASortedArray';

describe('squaresOfASortedArray', () => {
    it('runs as expected', () => {
        const input = [-4,-1,0,3,10];
        const result = sortedSquares(input);
        const expected = [0,1,9,16,100];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [-7,-3,2,3,11];
        const result = sortedSquares(input);
        const expected = [4,9,9,49,121];
        expect(result).to.deep.equal(expected);
    });
});

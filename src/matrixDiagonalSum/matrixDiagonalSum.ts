import { expect } from 'chai';
import { diagonalSum } from './matrixDiagonalSum.test';

describe('Matix diagonal sum', () => {
    it('runs as expected', () => {
        const input =  [[1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]];
        const result = diagonalSum(input);
        const expected = 25;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input =  [[1, 1, 1, 1],
                        [1, 1, 1, 1],
                        [1, 1, 1, 1],
                        [1, 1, 1, 1]];
        const result = diagonalSum(input);
        const expected = 25;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [[5]];
        const result = diagonalSum(input);
        const expected = 25;
        expect(result).to.equal(expected);
    });
});

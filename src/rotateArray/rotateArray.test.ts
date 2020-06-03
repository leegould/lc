import { expect } from 'chai';
import { rotate } from './rotateArray';

describe('Rotate Array', () => {
    it('runs as expected', () => {
        const arr: number[] = [1,2,3,4,5,6,7];
        const rotateAmount = 3;
        rotate(arr, rotateAmount);
        const expected = [5,6,7,1,2,3,4];
        expect(arr).to.deep.equal(expected);
    });

    it('runs as expected with empty array', () => {
        const arr: number[] = [];
        const rotateAmount = 3;
        rotate(arr, rotateAmount);
        const expected: number[] = [];
        expect(arr).to.deep.equal(expected);
    });

    it('runs as expected with negatives', () => {
        const arr: number[] = [-1,-100,3,99];
        const rotateAmount = 2;
        rotate(arr, rotateAmount);
        const expected = [3,99,-1,-100];
        expect(arr).to.deep.equal(expected);
    });

    it('runs as expected with zero element', () => {
        const arr: number[] = [2147483647,-2147483648,33,219,0];
        const rotateAmount = 4;
        rotate(arr, rotateAmount);
        const expected = [-2147483648,33,219,0,2147483647];
        expect(arr).to.deep.equal(expected);
    });
});

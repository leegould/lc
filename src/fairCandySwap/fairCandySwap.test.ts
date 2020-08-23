import { expect } from 'chai';
import { fairCandySwap } from './fairCandySwap';

describe('fairCandySwap', () => {
    it('runs as expected', () => {
        const A = [1,1];
        const B = [2,2];
        const result = fairCandySwap(A, B);
        const expected = [1,2];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const A = [1,2];
        const B = [2,3];
        const result = fairCandySwap(A, B);
        const expected = [1,2];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const A = [2];
        const B = [1,3];
        const result = fairCandySwap(A, B);
        const expected = [2,3];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const A = [1,2,5];
        const B = [2,4];
        const result = fairCandySwap(A, B);
        const expected = [5,4];
        expect(result).to.deep.equal(expected);
    });
});

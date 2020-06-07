import { expect } from 'chai';
import { flipAndInvertImage } from './flippingAnImage';

describe('flippingAnImage', () => {
    it('runs as expected', () => {
        const input = [[1,1,0],[1,0,1],[0,0,0]];
        const expected = [[1,0,0],[0,1,0],[1,1,1]];
        const result = flipAndInvertImage(input);
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with 4 items per row', () => {
        const input = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
        const expected = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]];
        const result = flipAndInvertImage(input);
        expect(result).to.deep.equal(expected);
    })
});

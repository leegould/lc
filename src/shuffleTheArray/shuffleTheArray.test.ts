import { expect } from 'chai';
import { shuffle } from './shuffleTheArray';

describe('shuffleTheArray', () => {
    it('runs as expected', () => {
        const input = [2,5,1,3,4,7];
        const n = 3;
        const result = shuffle(input, n);
        const expected = [2,3,5,4,1,7];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,2,3,4,4,3,2,1];
        const n = 4;
        const result = shuffle(input, n);
        const expected = [1,4,2,3,3,2,4,1];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [1,1,2,2];
        const n = 2;
        const result = shuffle(input, n);
        const expected = [1,2,1,2];
        expect(result).to.deep.equal(expected);
    });
});

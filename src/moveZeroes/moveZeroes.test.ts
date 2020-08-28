import { expect } from 'chai';
import { moveZeroes } from './moveZeroes';

describe('moveZeroes', () => {
    it('runs as expected', () => {
        const input = [0,1,0,3,12];
        moveZeroes(input);
        const expected = [1,3,12,0,0];
        expect(input).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { sortArrayByParity } from './sortArrayByParity';

describe('sortArrayByParity', () => {
    it('runs as expected', () => {
        const input = [3,1,2,4];
        const result = sortArrayByParity(input);
        const expected = [2,4,3,1];
        expect(result).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { hammingDistance } from './hammingDistance';

describe('hammingDistance', () => {
    it('runs as expected', () => {
        const x = 1;
        const y = 4;
        const expected = 2;
        const result = hammingDistance(x, y);
        expect(result).to.equal(expected);
    });
});

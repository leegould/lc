import { expect } from 'chai';
import { shortestToChar } from './shortestDistanceToAChar';

describe('shortestDistanceToAChar', () => {
    it('runs as expected', () => {
        const S = 'loveleetcode';
        const C = 'e';
        const result = shortestToChar(S, C);
        const expected = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];
        expect(result).to.deep.equal(expected);
    });
});

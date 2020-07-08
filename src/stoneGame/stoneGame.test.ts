import { expect } from 'chai';
import { stoneGame } from './stoneGame';

describe('stoneGame', () => {
    it('runs as expected', () => {
        const input = [5,3,4,5];
        const expected = true;
        const result = stoneGame(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const input = [3,7,2,3];
        const expected = true;
        const result = stoneGame(input);
        expect(result).to.equal(expected);
    });
});

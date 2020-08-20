import { expect } from 'chai';
import { lastStoneWeight } from './lastStoneWeight';

describe('lastStoneWeight', () => {
    it('runs as expected', () => {
        const input = [2,7,4,1,8,1];
        const result = lastStoneWeight(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
});

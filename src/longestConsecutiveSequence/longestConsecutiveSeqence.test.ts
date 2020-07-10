import { expect } from 'chai';
import { longestConsecutive } from './longestConsecutiveSequence';

describe('longestConsecutiveSequence', () => {
    it('runs as expected', () => {
        const input = [100, 4, 200, 1, 3, 2];
        const expected = 4;
        const result = longestConsecutive(input);
        expect(result).to.equal(expected);
    });
});

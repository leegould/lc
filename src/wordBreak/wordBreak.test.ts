import { expect } from 'chai';
import { wordBreak } from './wordBreak';

describe('wordBreak', () => {
    it('runs as expected', () => {
        const s = 'leetcode';
        const wordDict = ['leet', 'code'];
        const expected = true;
        const result = wordBreak(s, wordDict);
        expect(result).to.equal(expected);
    });
    it('runs as expected with duplicate word', () => {
        const s = 'applepenapple';
        const wordDict = ['apple', 'pen'];
        const expected = true;
        const result = wordBreak(s, wordDict);
        expect(result).to.equal(expected);
    });
    it('runs as expected with no match', () => {
        const s = 'catsandog';
        const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
        const expected = false;
        const result = wordBreak(s, wordDict);
        expect(result).to.equal(expected);
    });
});


import { expect } from 'chai';
import { findAnagrams } from './anagramsInAString';

describe('anagramsInAString', () => {
    it('runs as expected', () => {
        const input = "cbaebabacd"
        const find = "abc";
        const expected = [0,6];
        const result = findAnagrams(input, find);
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected', () => {
        const input = "abab"
        const find = "ab";
        const expected = [0, 1, 2];
        const result = findAnagrams(input, find);
        expect(result).to.deep.equal(expected);
    });
});
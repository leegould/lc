import { expect } from 'chai';
import { countCharacters } from './wordsFormedByCharacters';

describe('wordsFormedByCharacters', () => {
    it('runs as expected', () => {
        const words = ["cat","bt","hat","tree"];
        const chars = "atach";
        const result = countCharacters(words, chars);
        const expected = 6;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const words = ["hello","world","leetcode"];
        const chars = "welldonehoneyr";
        const result = countCharacters(words, chars);
        const expected = 10;
        expect(result).to.equal(expected);
    });
});
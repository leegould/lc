import { expect } from 'chai';
import { removeDuplicates } from './removeDuplicateAdjacent';

describe('Remove Duplicate Adjacent Strings', () => {
    it('runs as expected', () => {
        const s = "abbaca";
        const result = removeDuplicates(s);
        const expected = "ca";
        expect(result).to.equal(expected);
    });
    it('runs as expected with empty string', () => {
        const s = "";
        const result = removeDuplicates(s);
        const expected = "";
        expect(result).to.equal(expected);
    });
    it('runs as expected with no replace', () => {
        const s = "abc";
        const result = removeDuplicates(s);
        const expected = "abc";
        expect(result).to.equal(expected);
    });
});

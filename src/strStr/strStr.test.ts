import { expect } from 'chai';
import { strStr } from './strStr';

describe('strStr', () => {
    it('runs as expected', () => {
        const haystack = "hello";
        const needle = "ll";

        const expected = 2;

        const result = strStr(haystack, needle);

        expect(result).to.equal(expected);
    });

    it('runs as expected with no match', () => {
        const haystack = "aaaaa";
        const needle = "bba";

        const expected = -1;

        const result = strStr(haystack, needle);

        expect(result).to.equal(expected);
    });

    it('runs as expected with longer needle than haystack', () => {
        const haystack = "aaaaa";
        const needle = "aaaaaa";

        const expected = -1;

        const result = strStr(haystack, needle);

        expect(result).to.equal(expected);
    })
});

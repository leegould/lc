import { expect } from 'chai';
import { stringMatching } from './strMatchingInArr';

describe('strMatchingInArr', () => {
    it('runs as expected', () => {
        const words = ["mass","as","hero","superhero"];
        const result = stringMatching(words);
        const expected = ["as","hero"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const words = ["leetcode","et","code"];
        const result = stringMatching(words);
        const expected = ["et","code"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const words = ["blue","green","bu"];
        const result = stringMatching(words);
        const expected = [] as string[];
        expect(result).to.deep.equal(expected);
    });
});


import { expect } from 'chai';
import { letterCombinations } from './letterCombinations';

describe('letterCombinations', () => {
    it('runs as expected', () => {
        const input = "23";
        const result = letterCombinations(input);
        const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with no input', () => {
        const input = "";
        const result = letterCombinations(input);
        const expected: string[] = [];
        expect(result).to.deep.equal(expected);
    });
});

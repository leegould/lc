import { expect } from 'chai';
import { commonChars } from './findCommonChars';

describe('Find Common Characters', () => {
    it('runs as expected', () => {
        const input = ["bella","label","roller"];
        const result = commonChars(input);
        const expected = ["e","l","l"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = ["cool","lock","cook"];
        const result = commonChars(input);
        const expected = ["c","o"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with empty', () => {
        const input = ["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"];
        const result = commonChars(input);
        const expected: string[] = [];
        expect(result).to.deep.equal(expected);
    });
});

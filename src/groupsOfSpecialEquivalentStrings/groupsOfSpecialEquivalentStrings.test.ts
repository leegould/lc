import { expect } from 'chai';
import { numSpecialEquivGroups } from './groupsOfSpecialEquivalentStrings';

describe('Groups of Special-Equivalent Strings', () => {
    it('runs as expected', () => {
        const input = ["abcd","cdab","cbad","xyzz","zzxy","zzyx"];
        const result = numSpecialEquivGroups(input);
        const expected = 3;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = ["abc","acb","bac","bca","cab","cba"];
        const result = numSpecialEquivGroups(input);
        const expected = 3;
        expect(result).to.equal(expected);
    });
});

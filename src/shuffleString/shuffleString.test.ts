import { expect } from 'chai';
import { restoreString } from './shuffleString';

describe('Defanging an IP Address', () => {
    it('runs as expected', () => {
        const input = "codeleet";
        const indices = [4,5,6,7,0,2,1,3];
        const result = restoreString(input, indices);
        const expected = "leetcode";
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = "abc";
        const indices = [0,1,2];
        const result = restoreString(input, indices);
        const expected = "abc";
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = "aiohn";
        const indices = [3,1,4,2,0];
        const result = restoreString(input, indices);
        const expected = "nihao";
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = "aaiougrt";
        const indices = [4,0,2,6,7,3,1,5];
        const result = restoreString(input, indices);
        const expected = "arigatou";
        expect(result).to.equal(expected);
    });
    it('runs as expected with fifth example', () => {
        const input = "art";
        const indices = [1,0,2];
        const result = restoreString(input, indices);
        const expected = "rat";
        expect(result).to.equal(expected);
    });
});

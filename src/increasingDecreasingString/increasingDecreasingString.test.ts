import { expect } from 'chai';
import { sortString } from './increasingDecreasingString';

describe('increasingDecreasingString', () => {
    it('runs as expected', () => {
        const input = 'aaaabbbbcccc';
        const result = sortString(input);
        const expected = 'abccbaabccba';
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 'rat';
        const result = sortString(input);
        const expected = 'art';
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = 'leetcode';
        const result = sortString(input);
        const expected = 'cdelotee';
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = 'ggggggg';
        const result = sortString(input);
        const expected = 'ggggggg';
        expect(result).to.equal(expected);
    });
    it('runs as expected with fifth example', () => {
        const input = 'spo';
        const result = sortString(input);
        const expected = 'ops';
        expect(result).to.equal(expected);
    });
});

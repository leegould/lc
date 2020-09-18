import { expect } from 'chai';
import { balancedStringSplit } from './splitAStringInBalancedStrings';

describe('Split a String in Balanced Strings', () => {
    it('runs as expected', () => {
        const input = 'RLRRLLRLRL';
        const result = balancedStringSplit(input);
        const expected = 4;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 'RLLLLRRRLR';
        const result = balancedStringSplit(input);
        const expected = 3;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = 'LLLLRRRR';
        const result = balancedStringSplit(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = 'RLRRRLLRLL';
        const result = balancedStringSplit(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
});

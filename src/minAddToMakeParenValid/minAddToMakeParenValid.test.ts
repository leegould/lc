import { expect } from 'chai';
import { minAddToMakeValid } from './minAddToMakeParenValid';

describe('minAddToMakeParenValid', () => {
    it('runs as expected', () => {
        const input = '())';
        const result = minAddToMakeValid(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = '(((';
        const result = minAddToMakeValid(input);
        const expected = 3;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = '()';
        const result = minAddToMakeValid(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = '()))((';
        const result = minAddToMakeValid(input);
        const expected = 4;
        expect(result).to.equal(expected);
    });
});

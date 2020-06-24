import { expect } from 'chai';
import { isValid } from './validParentheses';

describe('Valid Parentheses', () => {
    it('It runs as expected', () => {
        const input = "()";
        const result = isValid(input);
        const expected = true;
        expect(result).to.equal(expected);
    });
    it('It runs as expected with second example', () => {
        const input = "()[]{}";
        const result = isValid(input);
        const expected = true;
        expect(result).to.equal(expected);
    });
    it('It runs as expected with third example', () => {
        const input = "(]";
        const result = isValid(input);
        const expected = false;
        expect(result).to.equal(expected);
    });
    it('It runs as expected with fourth example', () => {
        const input = "([)]";
        const result = isValid(input);
        const expected = false;
        expect(result).to.equal(expected);
    });
    it('It runs as expected with fifth example', () => {
        const input = "{[]}";
        const result = isValid(input);
        const expected = true;
        expect(result).to.equal(expected);
    });
});

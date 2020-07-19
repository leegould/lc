import { expect } from 'chai';
import { scoreOfParentheses } from './scoreOfParentheses';

describe('scoreOfParentheses', () => {
    it('runs as expected', () => {
        const input = '()';
        const result = scoreOfParentheses(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const input = '(())';
        const result = scoreOfParentheses(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const input = '()()';
        const result = scoreOfParentheses(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const input = '(()(()))';
        const result = scoreOfParentheses(input);
        const expected = 6;
        expect(result).to.equal(expected);
    });
});

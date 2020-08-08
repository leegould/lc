import { expect } from 'chai';
import { removeOuterParentheses } from './removeOutermostParentheses';

describe('removeOutermostParentheses', () => {
    it('runs as expected', () => {
        const input = '(()())(())';
        const result = removeOuterParentheses(input);
        const expected = '()()()';
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = '(()())(())(()(()))';
        const result = removeOuterParentheses(input);
        const expected = '()()()()(())';
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = '()()';
        const result = removeOuterParentheses(input);
        const expected = '';
        expect(result).to.equal(expected);
    });
});

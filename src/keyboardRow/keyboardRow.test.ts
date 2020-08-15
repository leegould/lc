import { expect } from 'chai';
import { findWords } from './keyboardRow';

describe('keyboardRow', () => {
    it('runs as expected', () => {
        const input = ["Hello", "Alaska", "Dad", "Peace"];
        const result = findWords(input);
        const expected = ["Alaska", "Dad"];
        expect(result).to.deep.equal(expected);
    });
});

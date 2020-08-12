import { expect } from 'chai';
import { findOcurrences } from './occurrencesAfterBigram';

describe('occurrencesAfterBigram', () => {
    it('runs as expected', () => {
        const input = "alice is a good girl she is a good student";
        const first = "a";
        const second = "good"
        const result = findOcurrences(input, first, second);
        const expected =  ['girl', 'student'];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected', () => {
        const input = "we will we will rock you";
        const first = "we";
        const second = "will"
        const result = findOcurrences(input, first, second);
        const expected =  ["we","rock"];
        expect(result).to.deep.equal(expected);
    });
});

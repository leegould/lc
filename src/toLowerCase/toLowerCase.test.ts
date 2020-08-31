import { expect } from 'chai';
import { toLowerCase } from './toLowerCase';

describe('toLowerCase', () => {
    it('runs as expected', () => {
        const input = 'Hello';
        const result = toLowerCase(input);
        const expected = 'hello';
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 'here';
        const result = toLowerCase(input);
        const expected = 'here';
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = 'LOVELY';
        const result = toLowerCase(input);
        const expected = 'lovely';
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = 'al&phaBET';
        const result = toLowerCase(input);
        const expected = 'al&phabet';
        expect(result).to.equal(expected);
    });
});

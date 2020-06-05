import { expect } from 'chai';
import { maximum69Number } from './maximum69Number';

describe('Maximum 69 Number', () => {
    it('runs as expected', () => {
        const input = 9669;
        const expected = 9969;
        const result = maximum69Number(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with one possible', () => {
        const input = 9996;
        const expected = 9999;
        const result = maximum69Number(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with no possible', () => {
        const input = 9999;
        const expected = 9999;
        const result = maximum69Number(input);
        expect(result).to.equal(expected);
    });
});
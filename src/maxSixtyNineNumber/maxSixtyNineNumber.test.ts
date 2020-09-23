import { expect } from 'chai';
import { maximum69Number } from '../maximum69Number/maximum69Number';

describe('Maximum 69 Number', () => {
    it('runs as expected', () => {
        const input = 9669;
        const result = maximum69Number(input);
        const expected = 9969;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 9996;
        const result = maximum69Number(input);
        const expected = 9999;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = 9999;
        const result = maximum69Number(input);
        const expected = 9999;
        expect(result).to.equal(expected);
    });
});

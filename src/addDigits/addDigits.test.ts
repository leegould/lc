import { expect } from 'chai';
import { addDigits } from './addDigits';

describe('addDigits', () => {
    it('runs as expected', () => {
        const input = 38;
        const result = addDigits(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
});

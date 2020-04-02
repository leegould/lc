import { expect } from 'chai';
import { romanToInt } from './romanToInteger';

describe('romanToInteger', () => {
    it('runs as expected with simple digits', () => {
        const input = "III";

        const expected = 3;

        const result = romanToInt(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with subtracting from fives', () => {
        const input = "IV";

        const expected = 4;

        const result = romanToInt(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with subtracting from tens', () => {
        const input = "IX";

        const expected = 9;

        const result = romanToInt(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with adding to larger ints', () => {
        const input = "LVIII";

        const expected = 58;

        const result = romanToInt(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with adding to larger ints', () => {
        const input = "MCMXCIV";

        const expected = 1994;

        const result = romanToInt(input);

        expect(result).to.equal(expected);
    });
});


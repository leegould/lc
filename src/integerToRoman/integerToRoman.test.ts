import { expect } from 'chai';
import { intToRoman } from './integerToRoman';

describe('integerToRoman', () => {
    it('runs as expected single digits', () => {
        const input = 3;

        const expected = "III";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with minus digits', () => {
        const input = 4;

        const expected = "IV";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with minus for ten', () => {
        const input = 9;

        const expected = "IX";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with ten', () => {
        const input = 10;

        const expected = "X";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with fifty plus numbers', () => {
        const input = 58;

        const expected = "LVIII";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with hundreds', () => {
        const input = 142;

        const expected = "CXLII";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with 500', () => {
        const input = 590;

        const expected = "DXC";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with 1000', () => {
        const input = 1400;

        const expected = "MCD";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with date', () => {
        const input = 1994;

        const expected = "MCMXCIV";

        const result = intToRoman(input);

        expect(result).to.equal(expected);
    });
});

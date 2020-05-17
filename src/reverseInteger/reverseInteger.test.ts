import { expect } from 'chai';
import { reverse } from './reverseInteger';

describe('reverseInteger', () => {
    it('runs as expected', () => {
        const input = 123;

        const expected = 321;

        const result = reverse(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with negative numbers', () => {
        const input = -123;

        const expected = -321;

        const result = reverse(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with trailing zeroes', () => {
        const input = 120;

        const expected = 21;

        const result = reverse(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with larger than the integer size', () => {
        const input = 2147483649;

        const expected = 0;

        const result = reverse(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with larger than the integer size', () => {
        const input = 1534236469;

        const expected = 0;

        const result = reverse(input);

        expect(result).to.equal(expected);
    });
});

import { expect } from 'chai';
import { isPalindrome } from './palindromeNumber';

describe('PalindromeNumber', () => {
    it('runs as expected', () => {
        const num = 121;
        const expected = true;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });

    it('runs as expected with negative', () => {
        const num = -121;
        const expected = false;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });

    it('runs as expected with test number', () => {
        const num = 10;
        const expected = false;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });

    it('runs as expected with zero padded number', () => {
        const num = 1000021;
        const expected = false;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });
    
    it('runs as expected with 1001', () => {
        const num = 1001;
        const expected = true;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });

    it('runs as expected with 9999', () => {
        const num = 9999;
        const expected = true;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });

    it('runs as expected with 2222222', () => {
        const num = 2222222;
        const expected = true;

        const result = isPalindrome(num);

        expect(result).to.equal(expected);
    });
});

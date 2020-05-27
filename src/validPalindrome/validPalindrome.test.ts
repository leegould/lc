import { expect } from 'chai';
import { isPalindrome } from './validPalindrome';

describe('Valid Palindrome', () => {
    it('runs as expected', () => {
        const input = "A man, a plan, a canal: Panama";
        const result = isPalindrome(input);

        expect(result).to.be.true;
    });

    it('runs as expected with false example', () => {
        const input = "race a car";
        const result = isPalindrome(input);

        expect(result).to.be.false;
    });
});

import { expect } from 'chai';
import { reverseOnlyLetters } from './reverseOnlyLetters';

describe('reverseOnlyLetters', () => {
    it('runs as expected', () => {
        const input = 'ab-cd';
        const result = reverseOnlyLetters(input);
        const expected = 'dc-ba';
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = 'a-bC-dEf-ghIj';
        const result = reverseOnlyLetters(input);
        const expected = 'j-Ih-gfE-dCba';
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = 'Test1ng-Leet=code-Q!';
        const result = reverseOnlyLetters(input);
        const expected = 'Qedo1ct-eeLg=ntse-T!';
        expect(result).to.equal(expected);
    });
});

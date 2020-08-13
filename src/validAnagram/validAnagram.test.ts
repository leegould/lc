import { expect } from 'chai';
import { isAnagram } from './validAnagram';

describe('validAnagram', () => {
    it('runs as expected', () => {
        const s = 'anagram';
        const t = 'nagaram';
        const result = isAnagram(s, t);
        expect(result).to.be.true;
    });
    it('runs as expected with second example', () => {
        const s = 'rat';
        const t = 'car';
        const result = isAnagram(s, t);
        expect(result).to.be.false;
    });
});

import { expect } from 'chai';
import { maxNumberOfBalloons } from './maxBalloons';

describe('maxBalloons', () => {
    it('runs as expected', () => {
        const input = "nlaebolko";
        const result = maxNumberOfBalloons(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with multiple', () => {
        const input = "loonbalxballpoon";
        const result = maxNumberOfBalloons(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
    it('runs as expected with none', () => {
        const input = "leetcode";
        const result = maxNumberOfBalloons(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with edge case', () => {
        const input = "balon";
        const result = maxNumberOfBalloons(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
});

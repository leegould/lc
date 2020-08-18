import { expect } from 'chai';
import { canMakeArithmeticProgression } from './canMakeArithmeticProgression';

describe('coinChange', () => {
    it('runs as expected', () => {
        const input = [3,5,1];
        const expected = true;
        const result = canMakeArithmeticProgression(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,2,4];
        const expected = false;
        const result = canMakeArithmeticProgression(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with negatives', () => {
        const input = [-68,-96,-12,-40,16];
        const expected = true;
        const result = canMakeArithmeticProgression(input);
        expect(result).to.equal(expected);
    });
});
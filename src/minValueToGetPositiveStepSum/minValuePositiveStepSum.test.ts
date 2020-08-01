import { expect } from 'chai';
import { minStartValue } from './minValuePositiveStepSum';

describe('minValuePositiveSteps', () => {
    it('runs as expected', () => {
        const input = [-3,2,-3,4,2];
        const result = minStartValue(input);
        const expected = 5;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,2];
        const result = minStartValue(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = [1,-2,-3];
        const result = minStartValue(input);
        const expected = 5;
        expect(result).to.equal(expected);
    });
});

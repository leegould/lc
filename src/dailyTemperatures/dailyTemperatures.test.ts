import { expect } from 'chai';
import { dailyTemperatures } from './dailyTemperatures';

describe('dailyTemperatures', () => {
    it('runs as expected', () => {
        const input = [73, 74, 75, 71, 69, 72, 76, 73];
        const result = dailyTemperatures(input);
        const expected = [1, 1, 4, 2, 1, 1, 0, 0];
        expect(result).to.deep.equal(expected);
    });
});

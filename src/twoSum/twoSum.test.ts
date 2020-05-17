import { expect } from 'chai';
import { twoSum } from './twoSum';

describe('TwoSum', () => {
    it('runs as expected', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;

        const expected = [0, 1];

        const result = twoSum(nums, target);

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected with different values', () => {
        const nums = [2, 7, 11, 15];
        const target = 18;

        const expected = [1, 2];

        const result = twoSum(nums, target);

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected with invalid target', () => {
        const nums = [2, 7, 11, 15];
        const target = 3;

        const expected: any = [];

        const result = twoSum(nums, target);

        expect(result).to.deep.equal(expected);
    });
});

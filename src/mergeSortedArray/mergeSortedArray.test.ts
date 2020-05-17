import { expect } from 'chai';
import { merge } from './mergeSortedArray';

describe('mergeSortedArray', () => {
    it('runs as expected', () => {
        const nums = [1,2,3,0,0,0];
        const m = 3;
        const nums2 = [2,5,6];
        const n = 3;

        const expected = [1,2,2,3,5,6];

        const result = merge(nums, m, nums2, n);

        expect(result).to.deep.equal(expected);
    });
});

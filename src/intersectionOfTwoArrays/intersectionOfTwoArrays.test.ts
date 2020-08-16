import { expect } from 'chai';
import { intersection } from './intersectionOfTwoArrays';

describe('intersectionOfTwoArrays', () => {
    it('runs as expected', () => {
        const nums1 = [1,2,2,1];
        const nums2 = [2,2];
        const result = intersection(nums1, nums2);
        const expected = [2];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const nums1 = [4,9,5];
        const nums2 = [9,4,9,8,4];
        const result = intersection(nums1, nums2);
        const expected = [9,4];
        expect(result).to.deep.equal(expected);
    });
});

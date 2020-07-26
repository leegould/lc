import { expect } from 'chai';
import { createTargetArray } from './createTargetArray';

describe('createTargetArray', () => {
    it('runs as expected', () => {
        const nums = [0,1,2,3,4];
        const index = [0,1,2,2,1];
        const result = createTargetArray(nums, index);
        const expected = [0,4,1,3,2];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const nums = [1,2,3,4,0];
        const index = [0,1,2,3,0];
        const result = createTargetArray(nums, index);
        const expected = [0,1,2,3,4];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with tiny example', () => {
        const nums = [1];
        const index = [0];
        const result = createTargetArray(nums, index);
        const expected = [1];
        expect(result).to.deep.equal(expected);
    });
});

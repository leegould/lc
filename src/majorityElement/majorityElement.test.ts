import { expect } from 'chai';
import { majorityElement } from './majorityElement';

describe('majorityElement', () => {
    it('runs as expected', () => {
        const nums = [3,2,3];

        const expected = 3;

        const result = majorityElement(nums);

        expect(result).to.equal(expected);
    });

    it('runs as expected', () => {
        const nums = [2,2,1,1,1,2,2];

        const expected = 2;

        const result = majorityElement(nums);

        expect(result).to.equal(expected);
    });
});

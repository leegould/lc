import { expect } from 'chai';
import { findDuplicates } from './findDuplicates';

describe('findDuplicatesInArray', () => {
    it('runs as expected', () => {
        const input = [4,3,2,7,8,2,3,1];
        const expected = [2,3];
        const result = findDuplicates(input);
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with only one duplicate', () => {
        const input = [2,2];
        const expected = [2];
        const result = findDuplicates(input);
        expect(result).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { findDisappearedNumbers } from './findNumbersDisappearedArr';

describe('findAllNumbersDisappearedInAnArray', () => {
    it('runs as expected', () => {
        const input = [4,3,2,7,8,2,3,1];
        const result = findDisappearedNumbers(input);
        const expected = [5,6];
        expect(result).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { findSpecialInteger } from './elementAppearingMoreThan';

describe('elementAppearingMoreThan', () => {
    it('runs as expected', () => {
        const input = [1,2,2,6,6,6,6,7,10];
        const result = findSpecialInteger(input);
        const expected = 6;
        expect(result).to.equal(expected);
    });
    it('runs as expected with single item', () => {
        const input = [1];
        const result = findSpecialInteger(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with quarter counts', () => {
        const input = [1,1,2,2,3,3,3,3];
        const result = findSpecialInteger(input);
        const expected = 3;
        expect(result).to.equal(expected);
    });

});

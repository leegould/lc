import { expect } from 'chai';
import { searchRange } from './firstAndLastPosition';

describe('firstAndLastPosition', () => {
    it('runs as expected', () => {
        const input = [5,7,7,8,8,10];
        const target = 8;

        const expected = [3,4];
        const result = searchRange(input, target);

        expect(result).to.deep.equal(expected);
    });
});


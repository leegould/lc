import { expect } from 'chai';
import { plusOne } from './plusOne';

describe('plusOne', () => {
    it('runs as expected', () => {
        const a = [1,2,3];

        const expected = [1,2,4];

        const result = plusOne(a);

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected when last number is 9', () => {
        const a = [1,2,9];

        const expected = [1,3,0];

        const result = plusOne(a);

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected when adds new column', () => {
        const a = [9,9,9];

        const expected = [1,0,0,0];

        const result = plusOne(a);

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected with long number', () => {
        const a = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

        const expected = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4];

        const result = plusOne(a);

        expect(result).to.deep.equal(expected);
    });
});

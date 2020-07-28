import { expect } from 'chai';
import { minSetSize } from './reduceArrSizeToTheHalf';

describe('uniquePaths', () => {
    it('runs as expected', () => {
        const input = [3,3,3,3,5,5,5,2,2,7];
        const result = minSetSize(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
    it('runs as expected for second example', () => {
        const input = [7,7,7,7,7,7];
        const result = minSetSize(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected for third example', () => {
        const input = [1,9];
        const result = minSetSize(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected for fourth example', () => {
        const input = [1000,1000,3,7];
        const result = minSetSize(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected for fifth example', () => {
        const input = [1,2,3,4,5,6,7,8,9,10];
        const result = minSetSize(input);
        const expected = 5;
        expect(result).to.equal(expected);
    });
});

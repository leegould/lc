import { expect } from 'chai';
import { findLucky } from './luckyNumbersInArray';

describe('luckyNumbersInArray', () => {
    it('runs as expected', () => {
        const input = [2,2,3,4];
        const expected = 2;
        const result = findLucky(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with highest', () => {
        const input = [1,2,2,3,3,3];
        const expected = 3;
        const result = findLucky(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with no matches', () => {
        const input = [2,2,2,3,3];
        const expected = -1;
        const result = findLucky(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with single entry', () => {
        const input = [5];
        const expected = -1;
        const result = findLucky(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with long single entry', () => {
        const input = [7,7,7,7,7,7,7];
        const expected = 7;
        const result = findLucky(input);
        expect(result).to.equal(expected);
    });
});

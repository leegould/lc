import { expect } from 'chai';
import { coinChange } from './coinChange';

describe('coinChange', () => {
    it('runs as expected', () => {
        const input = [1, 2, 5];
        const amount = 11;
        const expected = 3;
        const result = coinChange(input, amount);
        expect(result).to.equal(expected);
    });

    it('runs as expected with no value', () => {
        const input = [2];
        const amount = 3;
        const expected = -1;
        const result = coinChange(input, amount);
        expect(result).to.equal(expected);
    });

    it('runs as expected with larger example', () => {
        const input = [1,2,5,10];
        const amount = 18;
        const expected = 4;
        const result = coinChange(input, amount);
        expect(result).to.equal(expected);
    });

    it('runs as expected with out of order coins', () => {
        const input = [2,5,10,1];
        const amount = 27;
        const expected = 4;
        const result = coinChange(input, amount);
        expect(result).to.equal(expected);
    });

    it('runs as expected with big num', () => {
        const input = [186,419,83,408];
        const amount = 6249;
        const expected = 20;
        const result = coinChange(input, amount);
        expect(result).to.equal(expected);
    });
});
import { expect } from 'chai';
import { maxProfitBrute, maxProfit } from './buyAndSellStock2';

describe('buyAndSellStock 2 Brute force', () => {
    it('runs as expected', () => {
        const input = [1,2,3,4,5];
        const expected = 4;
        const result = maxProfitBrute(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with example', () => {
        const input = [7,1,5,3,6,4];
        const expected = 7;
        const result = maxProfitBrute(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with no profit example', () => {
        const input = [7,6,4,3,1];
        const expected = 0;
        const result = maxProfitBrute(input);
        expect(result).to.equal(expected);
    });
});

describe('buyAndSellStock 2', () => {
    it('runs as expected', () => {
        const input = [1,2,3,4,5];
        const expected = 4;
        const result = maxProfit(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with example', () => {
        const input = [7,1,5,3,6,4];
        const expected = 7;
        const result = maxProfit(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with no profit example', () => {
        const input = [7,6,4,3,1];
        const expected = 0;
        const result = maxProfit(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected with empty arr', () => {
        const input: number[] = [];
        const expected = 0;
        const result = maxProfit(input);
        expect(result).to.equal(expected);
    });
});
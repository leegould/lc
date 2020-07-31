import { expect } from 'chai';
import { numWaterBottles } from './waterBottles';

describe('waterBottles', () => {
    it('runs as expected', () => {
        const numBottles = 9;
        const numExchange = 3;
        const expected = 13;
        const result = numWaterBottles(numBottles, numExchange);
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const numBottles = 15;
        const numExchange = 4;
        const expected = 19;
        const result = numWaterBottles(numBottles, numExchange);
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const numBottles = 5;
        const numExchange = 5;
        const expected = 6;
        const result = numWaterBottles(numBottles, numExchange);
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const numBottles = 2;
        const numExchange = 3;
        const expected = 2;
        const result = numWaterBottles(numBottles, numExchange);
        expect(result).to.equal(expected);
    });
});

import { expect } from 'chai';
import { arrayToLinkedList } from '../util/LinkedList';
import { getDecimalValue } from './binLinkedListToNum';

describe('binLinkedListToNum', () => {
    it('runs as expected', () => {
        const input = arrayToLinkedList([1,0,1]);
        const result = getDecimalValue(input);
        const expected = 5;
        expect(result).to.equal(expected);
    });
    it('runs as expected with zero', () => {
        const input = arrayToLinkedList([0]);
        const result = getDecimalValue(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with one', () => {
        const input = arrayToLinkedList([1]);
        const result = getDecimalValue(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with large number', () => {
        const input = arrayToLinkedList([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]);
        const result = getDecimalValue(input);
        const expected = 18880;
        expect(result).to.equal(expected);
    });
    it('runs as expected with multiple zeroes', () => {
        const input = arrayToLinkedList([0,0]);
        const result = getDecimalValue(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
});

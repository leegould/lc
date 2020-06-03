import { expect } from 'chai';
import { addTwoNumbers } from './addTwoNumbers';
import { arrayToLinkedList, linkedListToArray } from '../util/LinkedList';

describe('addTwoNumbers', () => {
    it('runs as expected', () => {
        const number1 = [2,4,3];
        const LL1 = arrayToLinkedList(number1);

        const number2 = [5,6,4];
        const LL2 = arrayToLinkedList(number2);

        const expected = [7,0,8];

        const result = addTwoNumbers(LL1, LL2);
        const resultArr = linkedListToArray(result);

        expect(resultArr).to.deep.equal(expected);
    });

    it('runs as expected with smaller first number', () => {
        const number1 = [3];
        const LL1 = arrayToLinkedList(number1);

        const number2 = [5,6,4];
        const LL2 = arrayToLinkedList(number2);

        const expected = [8,6,4];

        const result = addTwoNumbers(LL1, LL2);
        const resultArr = linkedListToArray(result);

        expect(resultArr).to.deep.equal(expected);
    });

    it('runs as expected with nulls', () => {
        const expected = [0];

        const result = addTwoNumbers(null, null);
        const resultArr = linkedListToArray(result);

        expect(resultArr).to.deep.equal(expected);
    });

    it('runs as expected with large number', () => {
        
        const number1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
        const LL1 = arrayToLinkedList(number1);

        const number2 = [5,6,4];
        const LL2 = arrayToLinkedList(number2);

        const expected = [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];

        const result = addTwoNumbers(LL1, LL2);
        const resultArr = linkedListToArray(result);

        expect(resultArr).to.deep.equal(expected);
    });  
});

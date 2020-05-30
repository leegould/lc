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
});

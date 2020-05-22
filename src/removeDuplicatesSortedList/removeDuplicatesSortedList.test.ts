import { expect } from 'chai';
import { deleteDuplicates } from './removeDuplicatesSortedList';
import { arrayToLinkedList, compareTwoListsByVal, ListNode } from '../util/LinkedList';

describe('Remove Duplicates From Sorted List', () => {
    it('runs as expected', () => {
        const input = arrayToLinkedList([1,1,2]) as ListNode;
        const expected = arrayToLinkedList([1,2]) as ListNode;
        
        const result = deleteDuplicates(input);

        const resultEqual = compareTwoListsByVal(expected, result);
        expect(resultEqual).to.be.true;
    });

    it('runs as expected wwith larger example', () => {
        const input = arrayToLinkedList([1,1,2,3,3]) as ListNode;
        const expected = arrayToLinkedList([1,2,3]) as ListNode;
        
        const result = deleteDuplicates(input);

        const resultEqual = compareTwoListsByVal(expected, result);
        expect(resultEqual).to.be.true;
    });
});
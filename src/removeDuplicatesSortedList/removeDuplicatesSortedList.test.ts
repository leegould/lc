import { expect } from 'chai';
import { deleteDuplicates } from './removeDuplicatesSortedList';
import { createLinkedList, compareTwoListsByVal } from '../util/LinkedList';

describe('Remove Duplicates From Sorted List', () => {
    it('runs as expected', () => {
        const input = createLinkedList([1,1,2]);
        const expected = createLinkedList([1,2]);
        
        const result = deleteDuplicates(input);

        const resultEqual = compareTwoListsByVal(expected, result);
        expect(resultEqual).to.be.true;
    });

    it('runs as expected wwith larger example', () => {
        const input = createLinkedList([1,1,2,3,3]);
        const expected = createLinkedList([1,2,3]);
        
        const result = deleteDuplicates(input);

        const resultEqual = compareTwoListsByVal(expected, result);
        expect(resultEqual).to.be.true;
    });
});
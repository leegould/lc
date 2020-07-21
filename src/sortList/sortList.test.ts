import { expect } from 'chai';
import { arrayToLinkedList, compareTwoListsByVal, ListNode } from '../util/LinkedList';
import { sortList } from './sortList';

describe('uniquePaths', () => {
    it('runs as expected', () => {
        const input = arrayToLinkedList([4,2,1,3]);
        const result = sortList(input) as ListNode;
        const expected = arrayToLinkedList([1,2,3,4]) as ListNode;
        expect(compareTwoListsByVal(result, expected)).to.be.true;
    });
    it('runs as expected', () => {
        const input = arrayToLinkedList([1,5,3,4,0]);
        const result = sortList(input) as ListNode;
        const expected = arrayToLinkedList([0,1,3,4,5]) as ListNode;
        expect(compareTwoListsByVal(result, expected)).to.be.true;
    });
});

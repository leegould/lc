import { expect } from 'chai';
import { arrayToLinkedList, compareTwoListsByVal, ListNode } from '../util/LinkedList';

describe('reverseLinkedList2', () => {
    it('runs as expected', () => {
        const ll = arrayToLinkedList([1,2,3,4,5]);
        const start = 2;
        const end = 4;
        const expected = arrayToLinkedList([1,4,3,2,5]) as ListNode;
        const result = reverseBetween(ll, start, end);

        
        expect(compareTwoListsByVal(result, expected)).to.be.true;
    });
});

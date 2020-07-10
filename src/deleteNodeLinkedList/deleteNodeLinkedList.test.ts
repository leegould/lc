import { expect } from 'chai';
import { arrayToLinkedList, compareTwoListsByVal, ListNode } from '../util/LinkedList';
import { deleteNode } from './deleteNodeLinkedList';

describe('deleteNodeLinkedList', () => {
    it('runs as expected', () => {
        const head = arrayToLinkedList([4,5,1,9]);
        const node = head?.next as ListNode;
        const expected = arrayToLinkedList([4,1,9]) as ListNode;
        deleteNode(node);
        expect(compareTwoListsByVal(head as ListNode, expected)).to.be.true;
    });
});

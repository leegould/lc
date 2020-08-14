import { expect } from 'chai';
import { ListNode, arrayToLinkedList, linkedListToArray } from '../util/LinkedList';
import { deleteNode } from '../deleteNodeLinkedList/deleteNodeLinkedList';

describe('deleteNodeInALinkedList', () => {
    it('runs as expected', () => {
        const ll = arrayToLinkedList([4,5,1,9]) as ListNode;
        const node = ll.next as ListNode;
        deleteNode(node);
        const result = linkedListToArray(ll);
        const expected = [4,1,9]
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const ll = arrayToLinkedList([4,5,1,9]) as ListNode;
        const node = ll.next?.next as ListNode;
        deleteNode(node);
        const result = linkedListToArray(ll);
        const expected = [4,5,9]
        expect(result).to.deep.equal(expected);
    });
});

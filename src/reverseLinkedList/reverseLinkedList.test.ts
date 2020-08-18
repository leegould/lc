import { expect } from 'chai';
import { arrayToLinkedList, linkedListToArray, ListNode } from '../util/LinkedList';
import { reverseList } from './reverseLinkedList';

describe('reverseLinkedList', () => {
    it('runs as expected', () => {
        const input = arrayToLinkedList([1,2,3,4,5]);
        const result = linkedListToArray(reverseList(input) as ListNode);
        const expected = [5,4,3,2,1];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with empty node', () => {
        const result = reverseList(new ListNode(null));
        const expected = new ListNode(null);
        expect(result).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { arrayToLinkedList, ListNode } from '../util/LinkedList';
import { middleNode } from './middleOfTheLinkedList';

describe('middleOfTheLinkedList', () => {
    it('runs as expected', () => {
        const input = arrayToLinkedList([1,2,3,4,5]);
        const result = middleNode(input) as ListNode;
        const expected =  new ListNode(3);
        expect(result.val).to.equal(expected.val);
    });
    it('runs as expected with second example', () => {
        const input = arrayToLinkedList([1,2,3,4,5,6]);
        const result = middleNode(input) as ListNode;
        const expected = new ListNode(4);
        expect(result.val).to.equal(expected.val);
    });
});

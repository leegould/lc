import { expect } from 'chai';
import { arrayToLinkedList, ListNode, linkedListToArray, compareTwoListsByVal } from './LinkedList';

describe('Linked List', () => {
    it('linkedListToArray runs as expected', () => {
        const node = new ListNode(1);
        const result = linkedListToArray(node);
        const expected = [1];
        expect(result).to.deep.equal(expected);
    });

    it('arrayToLinkedList runs as expected', () => {
        const result = arrayToLinkedList([1,1,2]);
        const resultarr = linkedListToArray(result as ListNode);
        const expected = [1,1,2];
        expect(resultarr).to.deep.equal(expected);
    });

    it('arrayToLinkedList runs as expected with no entries', () => {
        const result = arrayToLinkedList([]);
        expect(result).to.be.null;
    });

    it('compareTwoListsByVal runs as expected with same lists', () => {
        const l1 = arrayToLinkedList([1,2]) as ListNode;
        const l2 = arrayToLinkedList([1,2]) as ListNode;
        const result = compareTwoListsByVal(l1, l2);
        expect(result).to.be.true;
    });

    it('compareTwoListsByVal runs as expected with different lists', () => {
        const l1 = arrayToLinkedList([1,2]) as ListNode;
        const l2 = arrayToLinkedList([1,3]) as ListNode;
        const result = compareTwoListsByVal(l1, l2);
        expect(result).to.be.false;
    });
});

import { ListNode } from '../util/LinkedList';
/**
 * Delete node in a linked list
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @description runtime O(1) space O(1)
 */
export function deleteNode(node: ListNode) {
    node.val = node.next?.val;
    node.next = node.next?.next || null;
};

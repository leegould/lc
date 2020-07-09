import { ListNode } from '../util/LinkedList';

/**
 * Delete Node from Linked List
 * @param head the head of the list
 * @param node the node to remove
 * @description runtime O(1)
 */
export function deleteNode(node: ListNode) {
    if (node.next) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
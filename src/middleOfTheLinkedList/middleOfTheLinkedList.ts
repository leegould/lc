/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * @description runtime O(n) space O(1)
 */
import { ListNode } from "../util/LinkedList";

export function middleNode(head: ListNode | null): ListNode | null {
    let counter = 0;
    let left = head as ListNode;

    while(head !== null) {
        if (counter % 2 === 1) {
            left = left.next as ListNode;
        }
        counter++;
        head = head.next;
    }

    return left;
};

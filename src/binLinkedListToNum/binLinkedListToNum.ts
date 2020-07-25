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
 */

import { ListNode } from "../util/LinkedList";

export function getDecimalValue(head: ListNode | null): number {
    let val = '';
    while(head) {
        val += head.val;
        head = head.next;
    }
    return parseInt(val, 2);
};
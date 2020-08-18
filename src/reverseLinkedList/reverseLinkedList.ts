/**
 * reverse Linked List
 * @param head the head of the list
 * @returns the new head of the list
 * @description runtime O(n) O(1)
 */

import { ListNode } from "../util/LinkedList";

export function reverseList(head: ListNode | null): ListNode | null {
    let prev = null;

    while(head) {
        const temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};

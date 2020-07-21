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

export function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let left: ListNode = head;
    let right: ListNode | null = head.next;
    while(right && right.next) {
        left = left.next as ListNode;
        right = right.next.next;
    }
    let rightList = left.next;
    left.next = null;
    return merge(sortList(head), sortList(rightList));
};

function merge(list1: ListNode | null, list2: ListNode | null) {
    let dummy = new ListNode(-1);
    let node = dummy;
    while(list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }
        node = node.next;
    }
    if (list1) {
        node.next = list1;
    }
    if (list2) {
        node.next = list2;
    }
    return dummy.next;
}
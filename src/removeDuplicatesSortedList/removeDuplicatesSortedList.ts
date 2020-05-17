import { ListNode } from "../util/LinkedList";

export function deleteDuplicates(head: ListNode) {
    let current: ListNode | null = head;
    let last: ListNode | null = null;
    while(current !== null) {
        if (last !== null && last.val === current.val) {
            last.next = current.next;
        } else {
            last = current;
        }
        current = current.next;
    }
    return head;
}
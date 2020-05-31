import { ListNode } from "../util/LinkedList";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    let root = null;
    let head = null;
    let carry = 0;
    let sum = 0;

    while(l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        const node = new ListNode(sum);
        
        if (head === null) {
            root = node;
            head = node;
        } else {
            head.next = node;
            head = node;
        }

        sum = carry;
        carry = 0;
    }

    return root || new ListNode(0);
}
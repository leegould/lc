import { ListNode } from "../util/LinkedList";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    function getNum(node: ListNode | null) {
        let idx = 0;
        let sum = 0;
        while(node) {
            sum += node.val * (Math.pow(10, idx));
            idx++;
            node = node.next;
        }
        return sum;
    }

    let sum = getNum(l1) + getNum(l2);

    let root = null;
    let prev = null;
    while(sum > 0) {
        const val = sum % 10;
        sum = Math.floor(sum / 10);
        const node = new ListNode(val);
        if (!root && !prev) {
            root = node;
            prev = node;
        } else if (prev) {
            prev.next = node;
            prev = node;
        }
    }

    return root || new ListNode(0);
}
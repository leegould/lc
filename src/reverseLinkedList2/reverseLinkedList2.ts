import { ListNode } from "../util/LinkedList";

export function reverseBetween(head: ListNode | null, start: number, end: number) {
    if (head) {
        let node: ListNode | null = head;
        let counter = 1;
        while(node && counter < start) {
            node = node.next;
            counter++;
        }

        if (node) {
            for(let i = 0;i < start - end;i++) {
                
            }
        }
    }

    return head;
}
import { ListNode } from "../util/LinkedList";

export function reverseBetween(head: ListNode | null, start: number, end: number) {
    let holder = new ListNode(0);
    holder.next = head;
    let pre: ListNode | null = holder;

    for(let i = 0;i < start - 1;i++) {
        if (pre) {
            pre = pre.next;
        }
    }

    let startnode = pre?.next || null;
    let post = startnode?.next || null;

    for(let i = 0;i < start - end;i++) {
        if (startnode) {
            startnode.next = post?.next || null;
        }
        if (post) {
            post.next = pre?.next || null;
        }
        if (pre) {
            pre.next = post;
        }
        post = startnode?.next || null;
    }

    return head;
}

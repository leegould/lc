import { ListNode } from "../util/LinkedList";

export function reverseBetween(head: ListNode | null, start: number, end: number) {
    let nodes = [];
    let node = head;
    for(let i = 1;i <= end;i++){
        if(i >= start){
            nodes.push(node);
        }
        node = node?.next || null;
    }
    var mid = Math.floor(nodes.length / 2);
    for(let i = 0;i < mid;i++){
        const node1 = nodes[i] as ListNode;
        const node2 = nodes[nodes.length - i - 1] as ListNode;
        const tmp = node1.val;
        node1.val = node2.val;
        node2.val = tmp;
    }
    return head;
}

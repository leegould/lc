export class ListNode {
    public val: any;
    public next: ListNode | null;

    constructor(val: any) {
        this.val = val;
        this.next = null;
    }
}

export function createLinkedList(values: any[]): ListNode {
    let first: ListNode | null = null;
    let head: ListNode | null = null;
    for(let i = 0; i < values.length; i++) {
        let ln = new ListNode(values[i]);
        if (head === null) {
            first = ln;
        } else {
            head.next = ln;
        }
        head = ln;
    }
    if (first) {
        return first;
    }
    throw new Error('no values');
}

export function compareTwoListsByVal(l1: ListNode, l2: ListNode) {
    let l1head: ListNode | null = l1;
    let l2head: ListNode | null = l2;
    while (l1head !== null && l2head !== null) {
        if (l1head.val !== l2head.val) {
            return false;
        }
        l1head = l1head.next;
        l2head = l2head.next;
    }
    return true;
}

export function dumpToConsole(listNode: ListNode) {
    let debugstr = '';
    let node: ListNode | null = listNode;
    while(node !== null) {
        if (debugstr !== '') {
            debugstr += '->';
        }
        debugstr += node.val;
        node = node.next;
    }
    console.log('debug', debugstr);
}
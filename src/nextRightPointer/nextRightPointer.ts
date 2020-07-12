
export class TreeNodeNext {
    public val: any;
    public left: TreeNodeNext | null;
    public right: TreeNodeNext | null;
    public next: TreeNodeNext | null;

    constructor(val: any) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}

/**
 * Connect the next right node
 * @param root the root node
 * @returns the tree with connected next nodes
 * @description runtime O()
 */
export function connect(root: TreeNodeNext | null) {
    if (!root) {
        return root;
    }

    const queue = [root];

    while(queue.length > 0) {
        let nodecount = queue.length;
        while(nodecount > 0) {
            const node = queue.shift() as TreeNodeNext;
            nodecount--;
            if (node && nodecount > 0) {
                node.next = queue[0];
            }
            if (node.left) {
                queue.push(node.left as TreeNodeNext);
            }
            if (node.right) {
                queue.push(node.right as TreeNodeNext);
            }
        }
    }

    return root;
}
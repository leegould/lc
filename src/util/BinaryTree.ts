export class TreeNode {
    public val: any;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: any) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export function arrayToTree(values: any[]): TreeNode | null {
    if (values.length === 0) {
        return null;
    }

    const root = new TreeNode(values[0]);
    const queue: any[] = [root];
    let index = 0;

    while (queue.length > 0 && index < values.length) {
        const n = queue.shift();

        if (index + 1 < values.length) {
            const left = new TreeNode(values[index + 1]);
            n.left = left;
            queue.push(left);
        }

        if (index + 2 < values.length) {
            const right = new TreeNode(values[index + 2]);
            n.right = right;
            queue.push(right);
        }

        index += 2;
    }

    return root;
}

export function treeToArray(node: TreeNode | null) {
    const output: any[] = [];
    
    if (node === null) {
        return output;
    }
    
    const queue: any[] = [node];

    while(queue.length > 0) {
        const n: TreeNode = queue.shift();
        output.push(n.val);
        if (n.left !== null) {
            queue.push(n.left);
        }
        if (n.right !== null) {
            queue.push(n.right);
        }
    }

    return output;
}

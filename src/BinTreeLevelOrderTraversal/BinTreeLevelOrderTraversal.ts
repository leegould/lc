import { TreeNode } from "../util/BinaryTree";

export function levelOrderBottom(root: TreeNode | null) {
    if (!root) return [];
    const output = [];

    const queue = [root];

    while(queue.length > 0) {
        const row = [];
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            let n = queue.shift() as TreeNode;
            row.push(n.val);
            if (n.left) {
                queue.push(n.left);
            }
            if (n.right) {
                queue.push(n.right);
            }
        }
        output.unshift(row);
    }

    return output;
}
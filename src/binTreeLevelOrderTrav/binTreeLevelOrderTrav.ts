import { TreeNode } from '../util/BinaryTree';

/** Binary Tree Level Order Traversal
 * @param root the tree root
 * @returns 2d array of the level order of the tree
 * @description runtime O()
 */
export function levelOrder(root: TreeNode | null) {
    if (!root) {
        return [];
    }
    const out = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const lvl = [];
        const len = queue.length;
        for(let i = 0; i < len;i++) {
            let node = queue.shift();
            if (node) {
                if (node.val !== null) {
                    lvl.push(node.val);
                }
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
        out.push(lvl);
    }

    console.log(JSON.stringify(out));
    return out;
}
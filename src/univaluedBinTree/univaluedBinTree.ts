import { TreeNode } from "../util/BinaryTree";

/**
 * Is universal tree
 * @param root the root node
 * @returns true if all nodes are same value
 * @description runtime O(n ^ 2)
 */
export function isUniversalTree(root: TreeNode) {
    const queue = [root];
    const val = root.val;

    while (queue.length > 0) {
        const node = queue.shift() as TreeNode;

        if (node.val !== null && node.val !== val) {
            return false;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return true;
}

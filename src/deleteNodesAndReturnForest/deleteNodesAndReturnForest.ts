import { TreeNode } from "../util/BinaryTree";

/**
 * Delete nodes and return forest
 * @param root the root node
 * @param to_delete the values to delete
 * @returns a list of forest nodes
 * @description runtime O(n) space O(n lg n)
 */

export function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const results = [];
    const queue = [{ node: root, isRoot: true}];

    while(queue.length > 0) {
        const { node, isRoot } = queue.shift() as { node: TreeNode, isRoot: boolean };
        const canDelete = to_delete.includes(node.val);

        if (!canDelete && isRoot) {
            results.push(node);
        }

        if (node.left) {
            queue.push({ node: node.left, isRoot: canDelete });
            if (to_delete.includes(node.left.val)) {
                node.left = null;
            }
        }
        if (node.right) {
            queue.push({ node: node.right, isRoot: canDelete });
            if (to_delete.includes(node.right.val)) {
                node.right = null;
            }
        }
    }

    return results;
};

import { TreeNode } from "../util/BinaryTree";

/**
 * Definition for a binary tree node.
 * @param root The root node
 * @param target the target value
 * @returns the root
 * @description runtime O() space O()
 */
export function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    if (!root) return null;

    if (root.left !== null) {
        root.left = removeLeafNodes(root.left, target);
    }
    if (root.right !== null) {
        root.right = removeLeafNodes(root.right, target);
    }

    if (root.val === target && root.left === null && root.right === null) {
        return null;
    }

    return root;
};

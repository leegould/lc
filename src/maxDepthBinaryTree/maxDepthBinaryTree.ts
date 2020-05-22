import { TreeNode } from "../util/BinaryTree";

export function maxDepth(root: TreeNode) {
    function getDepth(node: TreeNode | null, i: number = 0): number {
        if (!node) {
            return i;
        }
        return Math.max(getDepth(node.left, i + 1), getDepth(node.right, i + 1));
    }

    return getDepth(root);
}
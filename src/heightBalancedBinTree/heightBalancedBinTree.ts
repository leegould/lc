import { TreeNode } from "../util/BinaryTree";

export function isBalanced(root: TreeNode | null) {
    let result = true;

    function getHeight(node: TreeNode | null): number {
        if (node === null || node.val === null || !result) {
            return 0;
        }
        const lh = getHeight(node.left);
        const rh = getHeight(node.right);

        if (Math.abs(lh - rh) > 1) {
            result = false;
        }
        return Math.max(lh, rh) + 1;
    }

    getHeight(root);
    return result;
}
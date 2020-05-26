import { TreeNode } from "../util/BinaryTree";

export function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const left = minDepth(root.left);
    const right = minDepth(root.right);
    return 1 + (Math.min(left, right) || Math.max(left, right));
}
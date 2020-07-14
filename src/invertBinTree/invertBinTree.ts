import { TreeNode } from "../util/BinaryTree";

/**
 * Invert a binary tree
 * @param root the root node
 * @returns the inverted trees root
 * @description runtime O()
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }
    
    const temp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;
    
    return root;
};
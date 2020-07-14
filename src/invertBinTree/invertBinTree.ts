import { TreeNode } from "../util/BinaryTree";

/**
 * Invert a binary tree
 * @param root the root node
 * @returns the inverted trees root
 * @description runtime O()
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
    function invert(node: TreeNode | null) {
        if(!node || (!node.left && !node.right)) {
            return node;
        }
        const temp = invert(node.left);
        node.left = invert(node.right);
        node.right = temp;
        return node;
    }

    invert(root);
    return root;
};
import { TreeNode } from "../util/BinaryTree";

/** Search BST
 * @param root the root of the tree
 * @param val the value to search for
 * @returns a subtree of the matching value or emp
 * @description runtime O()
 */
export function searchBST(root: TreeNode | null, val: number) {
    if (!root) {
        return root;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            if (node.val === val) {
                return node;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return null;
}
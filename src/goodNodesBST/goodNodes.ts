import { TreeNode } from "../util/BinaryTree";

/**
 * Good Nodes
 * @param root the root node
 * @returns the number of good nodes
 * @description runtime O(n ^ 2)
 */
export function goodNodes(root: TreeNode) {
    let count = 0;
    function getGoodChildren(node: TreeNode | null | undefined, lastValue: number) {
        if (node === null || node === undefined || node.val === null) {
            return;
        }
        if (node.val >= lastValue) {
            count += 1;
        }
        getGoodChildren(node.left, Math.max(lastValue, node.val));
        getGoodChildren(node.right, Math.max(lastValue, node.val));
    }

    getGoodChildren(root, root.val);
    return count;
}
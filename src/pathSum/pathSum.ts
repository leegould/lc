import { TreeNode } from "../util/BinaryTree";

export function hasPathSum(root: TreeNode | null, sum: number) {
    function equalsSum(node: TreeNode | null, runningTotal: number): boolean {
        const newTotal = (node && node.val || 0) + runningTotal;
        if (newTotal === sum && !node?.left && !node?.right) {
            console.log('true', node?.val, newTotal);
            return true;
        } 
        if (!node?.left && !node?.right && Math.abs(newTotal) > Math.abs(sum)) {
            console.log('over', node?.val, newTotal);
            return false;
        }
        console.log('next', node?.val, newTotal);
        const leftSum = node !== null && node.left !== null && equalsSum(node.left, newTotal);
        const rightSum = node !== null && node.right !== null && equalsSum(node.right, newTotal);
        return leftSum || rightSum;
    }

    if (!root || root.val === sum && (root.left !== null || root.right !== null)) {
        return false;
    }
    return equalsSum(root, 0);
}

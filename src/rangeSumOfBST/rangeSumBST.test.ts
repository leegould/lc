/**
 * Definition for a binary tree node.
 * @param root the root of the tree
 * @param L the lower range
 * @param R the upper range
 * @returns the ranged sum of the bst
 * @description runtime O(n) space O(n)
 */

import { TreeNode } from "../util/BinaryTree";

export function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
    const stack = [root];
    let sum = 0;

    while(stack.length > 0) {
        const node = stack.pop();

        if (node) {
            if (node.val >= L && node.val <= R) {
                sum += node.val;
            }
            if (node.left) {
                stack.push(node.left); 
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
    }

    return sum;
};

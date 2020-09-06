/**
 * Maximum Level Sum of Binary Tree
 * @param root the root of the tree
 * @returns the max level
 * @description runtime O(n) space O(n / 2) - half the size of the tree at bottom level
 */

import { TreeNode } from "../util/BinaryTree";

export function maxLevelSum(root: TreeNode | null): number {
    let level = 0;
    let maxLevel = 0;
    let max = 0;
    const queue = [root];

    while (queue.length > 0) {
        level++;
        let sum = 0;
        const size = queue.length;

        for(let i = 0; i < size;i++) {
            const node = queue.shift() as TreeNode;
            sum += node.val;

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        if (sum > max) {
            max = sum;
            maxLevel = level;
        }
    }

    return maxLevel;
};

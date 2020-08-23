import { TreeNode } from "../util/BinaryTree";

/**
 * Sorted array to Balanced Sorted Tree
 * @param nums the list of numbers to construct the tree with
 * @returns a balanced sorted tree.
 * O(n)
 */
export function sortedArrayToBST(nums: number[]) {
    if (nums.length === 0) {
        return null;
    }

    function appendChildren(lower: number, upper: number) {
        if (lower > upper) {
            return null;
        }

        const mid = Math.ceil((lower + upper) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = appendChildren(lower, mid - 1);
        node.right = appendChildren(mid + 1, upper);
        return node;
    }

    return appendChildren(0, nums.length - 1);
}
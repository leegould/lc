import { TreeNode } from "../util/BinaryTree";

/** Search BST Breadth First
 * @param root the root of the tree
 * @param val the value to search for
 * @returns a subtree of the matching value or emp
 * @description runtime O(Vertices + Edges)
 */
export function searchBSTBFS(root: TreeNode | null, val: number) {
    if (!root) {
        return root;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift() as TreeNode;
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

    return null;
}

/** Search BST Depth first
 * @param root the root of the tree
 * @param val the value to search for
 * @returns a subtree of the matching value or emp
 * @description runtime O(Vertices + Edges)
 */
export function searchBSTDFS(root: TreeNode | null, val: number) {
    if (!root) {
        return root;
    }

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop() as TreeNode;
        if (node.val === val) {
            return node;
        }
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }

    return null;
}
import { TreeNode } from "../util/BinaryTree";

export function isSymmetric(root: TreeNode) {
    function compare(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left === null || right === null) {
            return left === right;
        }
        if (left.val !== right.val) {
            return false;
        }
        return compare(left.left, right.right) && compare(left.right, right.left);
    }

    return root === null || root.val === null || compare(root.left, root.right);
}

export function isSymmetricIterative(root: TreeNode) {
    if (!root || root.val === null) {
        return true;
    }

    const stack: TreeNode[] = [];

    function checkOrFillStack(left: TreeNode | null | undefined, right: TreeNode | null | undefined) {
        if (left !== null && left !== undefined) {
            if (right === null || right === undefined) {
                return false;
            }
            stack.push(left);
            stack.push(right);
        } else if (right !== null && right !== undefined) {
            return false;
        }
        return true;
    }

    const initial = checkOrFillStack(root.left, root.right);
    if (!initial) {
        return false;
    }

    while(stack.length > 0) {
        const left: TreeNode | null | undefined = stack.pop();
        const right: TreeNode | null | undefined = stack.pop();

        if (!left || !right) {
            return left === right;
        }

        if (left.val !== right.val) {
            return false;
        }

        if (!checkOrFillStack(left.left, right.right) || !checkOrFillStack(left?.right, right?.left)) {
            return false;
        }
    }

    return true;
}
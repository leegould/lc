import { TreeNode } from "../util/BinaryTree";

/** Increasing Order Search Tree
 * @param root the root node
 * @returns a tree with increasing order 
 * @description runtime ()
 */
export function increasingBST(root: TreeNode | null) {
    let head: TreeNode | null = null;
    let pre: TreeNode | null = null;
    
    function helper(node: TreeNode | null) {
        if(!node) return;
		
        helper(node.left);
		
        if(!head) {
            head = node;
            pre = node;
        } else {
            // @ts-ignore
            pre.right = node;
            // @ts-ignore
            pre = pre.right;
            node.left = null;
        }
		
		// right
        helper(node.right);
    }
    
    helper(root);
    return head;
}
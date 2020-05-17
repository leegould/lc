export class TreeNode {
    public val: any;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: any) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
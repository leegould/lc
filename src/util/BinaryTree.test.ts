import { expect } from 'chai';
import { TreeNode, treeToArray, arrayToTree } from '../util/BinaryTree';

describe('Binary Tree', () => {
    it('treeToArray runs as expected', () => {
        const root = new TreeNode(3);

        const r1l = new TreeNode(9);
        r1l.left = new TreeNode(3);
        r1l.right = new TreeNode(4);

        const r1r = new TreeNode(2);
        r1r.left = new TreeNode(4);
        r1r.right = new TreeNode(3);

        root.left = r1l;
        root.right = r1r;

        const result = treeToArray(root);
        const expected = [3,9,2,3,4,4,3];

        expect(result).to.deep.equal(expected);
    });

    it('treeToArray runs as expected with null', () => {
        const root = new TreeNode(null);

        const result = treeToArray(root);
        const expected = [null];

        expect(result).to.deep.equal(expected);
    });

    it('arrayToTree runs as expected', () => {
        const result = arrayToTree([3,9,2,3,4,4,3]);

        const resultToArray = treeToArray(result);
        const expected = [3,9,2,3,4,4,3];

        expect(resultToArray).to.deep.equal(expected);
    });

    it('arrayToTree runs as expected with null', () => {
        const result = arrayToTree([]);
        const resultToArray = treeToArray(result);
        const expected: any[] = [];

        expect(resultToArray).to.deep.equal(expected);
    });
});

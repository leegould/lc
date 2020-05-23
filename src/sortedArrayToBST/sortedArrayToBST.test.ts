import { expect } from 'chai';
import { TreeNode, treeToArray } from '../util/BinaryTree';
import { sortedArrayToBST } from './sortedArrayToBST';

describe('sorted array to BST', () => {
    it('runs as expected', () => {
        const input = [-10,-3,0,5,9];

        const result = sortedArrayToBST(input);
        const resultArr = treeToArray(result);

        const expected = new TreeNode(0);
        expected.left = new TreeNode(-3);
        expected.right = new TreeNode(9);
        expected.left.left = new TreeNode(-10);
        expected.right.left = new TreeNode(5);

        const expectedArr = treeToArray(expected);

        expect(resultArr).to.deep.equal(expectedArr);
    });

    it('runs as expected with null', () => {
        const input: number[] = [];

        const result = sortedArrayToBST(input);

        expect(result).to.equal(null);
    });
});

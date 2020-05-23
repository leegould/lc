import { expect } from 'chai';
import { levelOrderBottom } from './binTreeLevelOrderTraversal';
import { TreeNode, arrayToTree } from '../util/BinaryTree';

describe('Binary Tree Level Order Traversal 2', () => {
    it('runs as expected', () => {
        const root = arrayToTree([3,9,20,null,null,15,7]);
        const result = levelOrderBottom(root as TreeNode);
        const expected = [
            [null, null, 15,7],
            [9,20],
            [3],
        ];

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected with null', () => {
        const result = levelOrderBottom(null);
        const expected: any = [];

        expect(result).to.deep.equal(expected);
    });

    // This runs differently than the code on the site, as it uses a diff constructor for the tree (no null entries)
    it('runs with null entries as expected', () => {
        const root = arrayToTree([1,2,null,3,null,4,null,5]);
        const result = levelOrderBottom(root as TreeNode);
        const expected = [
            [5],
            [3, null, 4, null],
            [2, null],
            [1]
        ];

        expect(result).to.deep.equal(expected);
    })
});

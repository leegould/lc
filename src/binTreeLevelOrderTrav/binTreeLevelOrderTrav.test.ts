import { expect } from 'chai';
import { levelOrder } from './binTreeLevelOrderTrav';
import { TreeNode, arrayToTree } from '../util/BinaryTree';

describe('Binary Tree Level Order Traversal', () => {
    it('runs as expected', () => {
        const root = arrayToTree([3,9,20,null,null,15,7]);
        const result = levelOrder(root as TreeNode);
        const expected = [
            [3],
            [9,20],
            [15,7],
        ];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with null input', () => {
        const result = levelOrder(null);
        const expected: number[] = [];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with zero value', () => {
        const root = arrayToTree([0,2,4,1,null,3,-1,5,1,null,6,null,8]);
        const result = levelOrder(root as TreeNode);
        const expected = [
            [0],
            [2,4],
            [1,3,-1],
            [5,1,6,8],
        ];
        expect(result).to.deep.equal(expected);
    });
});

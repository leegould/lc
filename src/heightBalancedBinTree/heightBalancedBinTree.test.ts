import { expect } from 'chai';
import { TreeNode, arrayToTree } from '../util/BinaryTree';
import { isBalanced } from './heightBalancedBinTree';

describe('Height Balanced Binary Tree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([3,9,20,null,null,15,7]) as TreeNode;
        const result = isBalanced(root);
        const expected = true;

        expect(result).to.equal(expected);
    });

    it('runs as expected with false example', () => {
        const root = arrayToTree([1,2,2,3,3,null,null,4,4]) as TreeNode;
        const result = isBalanced(root);
        const expected = false;

        expect(result).to.equal(expected);
    });


    it('runs as expected with null root', () => {
        const result = isBalanced(null);
        const expected = true;

        expect(result).to.equal(expected);
    });
});

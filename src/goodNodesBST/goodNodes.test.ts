import { expect } from 'chai';
import { goodNodes } from './goodNodes';
import { TreeNode, arrayToTree } from '../util/BinaryTree';

describe('Binary Tree Level Order Traversal', () => {
    it('runs as expected', () => {
        const root = arrayToTree([3,1,4,3,null,1,5]);
        const result = goodNodes(root as TreeNode);
        const expected = 4;
        expect(result).to.equal(expected);
    });

    it('runs as expected with small example', () => {
        const root = arrayToTree([3,3,null,4,2]);
        const result = goodNodes(root as TreeNode);
        const expected = 3;
        expect(result).to.equal(expected);
    });

    it('runs as expected with single node', () => {
        const root = arrayToTree([1]);
        const result = goodNodes(root as TreeNode);
        const expected = 1;
        expect(result).to.equal(expected);
    });
});

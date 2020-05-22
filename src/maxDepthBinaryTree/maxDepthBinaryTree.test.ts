import { expect } from 'chai';
import { TreeNode, arrayToTree } from '../util/BinaryTree';
import { maxDepth } from './maxDepthBinaryTree';

describe('Maximum Depth of Binary Tree', () => {
    it('runs as expected', () => {
         const root = arrayToTree([3,9,2,3,4,4,3]);
         const result = maxDepth(root as TreeNode);
         expect(result).to.equal(3);
    });
});

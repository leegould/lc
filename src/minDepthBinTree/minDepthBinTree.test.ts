import { expect } from 'chai';
import { TreeNode, arrayToTree } from '../util/BinaryTree';
import { minDepth } from './minDepthBinTree';

describe('Minimum depth binary tree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([3,9,20,null,null,15,7]) as TreeNode;
        const result = minDepth(root);
        const expected = 3;

        expect(result).to.equal(expected);
    });

    // it('runs as expected with empty nodes', () => {
    //     const root = arrayToTree([1,2,null,3,null,4,null,5]) as TreeNode;
    //     const result = minDepth(root);
    //     const expected = 5;

    //     expect(result).to.equal(expected);
    // })

    it('runs as expected with null root', () => {
        const root = null;
        const result = minDepth(root);
        const expected = 0;

        expect(result).to.equal(expected);
    });
});

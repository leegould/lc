import { expect } from 'chai';
import { isUniversalTree } from './univaluedBinTree';
import { TreeNode, arrayToTree } from '../util/BinaryTree';

describe('Univalued Binary Tree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([1,1,1,1,1,null,1]);
        const result = isUniversalTree(root as TreeNode);
        const expected = true;
        expect(result).to.equal(expected);
    });

    it('runs as expected wwith false example', () => {
        const root = arrayToTree([2,2,2,5,2]);
        const result = isUniversalTree(root as TreeNode);
        const expected = false;
        expect(result).to.equal(expected);
    });
});

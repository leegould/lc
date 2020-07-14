import { expect } from 'chai';
import { arrayToTree, TreeNode, treeToArray } from '../util/BinaryTree';
import { invertTree } from './invertBinTree';

describe('invertTree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([4,2,7,1,3,6,9]);
        const result = invertTree(root as TreeNode);
        const expected = arrayToTree([4,7,2,9,6,3,1]);
        const resultArr = treeToArray(result);
        const expectedArr = treeToArray(expected)
        expect(resultArr).to.deep.equal(expectedArr);
    });
});

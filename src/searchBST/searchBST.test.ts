import { expect } from 'chai';
import { searchBST } from './searchBST';
import { TreeNode, arrayToTree, treeToArray } from '../util/BinaryTree';

describe('Search Binary Search Tree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([4,2,7,1,3]);
        const searchVal = 2;
        const result = searchBST(root as TreeNode, searchVal);
        const expected = arrayToTree([2,1,3]);


        const resultArr = treeToArray(result as TreeNode);
        const expectedArr = treeToArray(expected)

        expect(resultArr).to.deep.equal(expectedArr);
    });

    it('runs as expected with unfound', () => {
        const root = arrayToTree([4,2,7,1,3]);
        const searchVal = 5;
        const result = searchBST(root as TreeNode, searchVal);

        expect(result).to.deep.equal(null);
    });
});

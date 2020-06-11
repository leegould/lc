import { expect } from 'chai';
import { searchBSTBFS, searchBSTDFS } from './searchBST';
import { TreeNode, arrayToTree, treeToArray } from '../util/BinaryTree';

describe('Search Binary Search Tree Breadth First', () => {
    it('runs as expected', () => {
        const root = arrayToTree([4,2,7,1,3]);
        const searchVal = 2;
        const result = searchBSTBFS(root as TreeNode, searchVal);
        const expected = arrayToTree([2,1,3]);


        const resultArr = treeToArray(result as TreeNode);
        const expectedArr = treeToArray(expected)

        expect(resultArr).to.deep.equal(expectedArr);
    });

    it('runs as expected with unfound', () => {
        const root = arrayToTree([4,2,7,1,3, undefined]);
        const searchVal = 5;
        const result = searchBSTBFS(root as TreeNode, searchVal);

        expect(result).to.deep.equal(null);
    });

    it('runs as expected with null', () => {
        const result = searchBSTBFS(null, 0);
        expect(result).to.deep.equal(null);
    });
});

describe('Search Binary Search Tree Depth First', () => {
    it('runs as expected', () => {
        const root = arrayToTree([4,2,7,1,3]);
        const searchVal = 2;
        const result = searchBSTDFS(root as TreeNode, searchVal);
        const expected = arrayToTree([2,1,3]);


        const resultArr = treeToArray(result as TreeNode);
        const expectedArr = treeToArray(expected)

        expect(resultArr).to.deep.equal(expectedArr);
    });

    it('runs as expected with unfound', () => {
        const root = arrayToTree([4,2,7,1,3]);
        const searchVal = 5;
        const result = searchBSTDFS(root as TreeNode, searchVal);

        expect(result).to.deep.equal(null);
    });

    it('runs as expected with null', () => {
        const result = searchBSTDFS(null, 0);
        expect(result).to.deep.equal(null);
    });
});
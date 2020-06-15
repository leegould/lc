import { expect } from 'chai';
import { increasingBST } from './increasingOrderSearchTree';
import { TreeNode, arrayToTree, treeToArray } from '../util/BinaryTree';

describe('Increasing Order Search Tree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([5,3,6,2,4,null,8,1,null,null,null,7,9]);
        const result = increasingBST(root as TreeNode);
        const expectedArr = [ 1, 2, null, 3, null, 4, null, 5, 7, null, 9, 6, 8 ];
        const resultArr = treeToArray(result);
        expect(resultArr).to.deep.equal(expectedArr);
    });
});

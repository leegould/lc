import { expect } from 'chai';
import { TreeNode, arrayToTree } from '../util/BinaryTree';
import { hasPathSum } from './pathSum';

describe('Path sum', () => {
    it('runs as expected', () => {
        const root = arrayToTree([5,4,8,11,null,13,4,7,2,null,1]) as TreeNode;
        const sum = 22;
        const result = hasPathSum(root, sum);
        const expected = true;

        expect(result).to.equal(expected);
    });

    it('runs as expected with root answer', () => {
        const root = arrayToTree([1,2]) as TreeNode;
        const sum = 1;
        const result = hasPathSum(root, sum);
        const expected = false;

        expect(result).to.equal(expected);
    });

    it('runs as expected with root only', () => {
        const root = arrayToTree([1]) as TreeNode;
        const sum = 1;
        const result = hasPathSum(root, sum);
        const expected = true;

        expect(result).to.equal(expected);
    });

    it('runs as expected with negatives', () => {
        const root = arrayToTree([-2,null,-3,-5]) as TreeNode;
        const sum = -5;
        const result = hasPathSum(root, sum);
        const expected = true;

        expect(result).to.equal(expected);
    });

    it('runs as expected with null tree entries', () => {
        const root = arrayToTree([1,2,null,3,null,4,null,5]) as TreeNode;
        const sum = 6;
        const result = hasPathSum(root, sum);
        const expected = false;

        expect(result).to.equal(expected);
    });

    it('runs as expected with null root', () => {
        const root = arrayToTree([]) as TreeNode;
        const sum = 1;
        const result = hasPathSum(root, sum);
        const expected = false;

        expect(result).to.equal(expected);
    });

    it('runs as expected with negative mix', () => {
        const root = arrayToTree([8,9,-6,null,null,5,9]) as TreeNode;
        const sum = 7;
        const result = hasPathSum(root, sum);
        const expected = true;

        expect(result).to.equal(expected);
    });
    
});

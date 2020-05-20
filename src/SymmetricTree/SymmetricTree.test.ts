import { expect } from 'chai';
import { isSymmetric, isSymmetricIterative } from './SymmetricTree';
import { TreeNode, arrayToTree } from '../util/BinaryTree';

describe('Symmetric Tree', () => {
    it('runs as expected', () => {
        const root = arrayToTree([1,2,2,3,4,4,3]);
        const result = isSymmetric(root as TreeNode);

        expect(result).to.be.true;
    });

    it('runs as expected with null root', () => {
        const root = new TreeNode(null);

        const result = isSymmetric(root);

        expect(result).to.be.true;
    });

    it('runs as expected with false example', () => {
        const root = arrayToTree([1,2,2,null,3,null,3]);
        const result = isSymmetric(root as TreeNode);

        expect(result).to.be.false;
    });

    it('runs as expected with false children example', () => {
        const root = arrayToTree([1,2,3]);
        const result = isSymmetric(root as TreeNode);

        expect(result).to.be.false;
    });
});

describe('Symmetric Tree Iterative', () => {
    it('runs as expected', () => {
        const root = arrayToTree([1,2,2,3,4,4,3]);
        const result = isSymmetricIterative(root as TreeNode);

        expect(result).to.be.true;
    });

    it('runs as expected with null root', () => {
        const root = new TreeNode(null);

        const result = isSymmetricIterative(root);

        expect(result).to.be.true;
    });

    it('runs as expected with false example', () => {
        const root = arrayToTree([1,2,2,null,3,null,3]);
        const result = isSymmetricIterative(root as TreeNode);

        expect(result).to.be.false;
    });

    it('runs as expected with false children example', () => {
        const root = arrayToTree([1,2,null]);
        const result = isSymmetric(root as TreeNode);

        expect(result).to.be.false;
    });
});

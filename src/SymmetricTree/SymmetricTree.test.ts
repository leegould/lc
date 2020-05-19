import { expect } from 'chai';
import { isSymmetric, isSymmetricIterative } from './SymmetricTree';
import { TreeNode } from '../util/BinaryTree';

describe('Symmetric Tree', () => {
    it('runs as expected', () => {
        const root = new TreeNode(1);

        const r1l = new TreeNode(2);
        r1l.left = new TreeNode(3);
        r1l.right = new TreeNode(4);

        const r1r = new TreeNode(2);
        r1r.left = new TreeNode(4);
        r1r.right = new TreeNode(3);

        root.left = r1l;
        root.right = r1r;

        const result = isSymmetric(root);

        expect(result).to.be.true;
    });

    it('runs as expected with null root', () => {
        const root = new TreeNode(null);

        const result = isSymmetric(root);

        expect(result).to.be.true;
    });

    it('runs as expected with false example', () => {
        const root = new TreeNode(1);

        const r1l = new TreeNode(2);
        r1l.right = new TreeNode(3);

        const r1r = new TreeNode(2);
        r1r.right = new TreeNode(3);

        root.left = r1l;
        root.right = r1r;

        const result = isSymmetric(root);

        expect(result).to.be.false;
    });

    it('runs as expected with false children example', () => {
        const root = new TreeNode(1);
        const r1l = new TreeNode(2);
        const r1r = new TreeNode(3);

        root.left = r1l;
        root.right = r1r;

        const result = isSymmetric(root);

        expect(result).to.be.false;
    });
});

describe('Symmetric Tree Iterative', () => {
    it('runs as expected', () => {
        const root = new TreeNode(1);

        const r1l = new TreeNode(2);
        r1l.left = new TreeNode(3);
        r1l.right = new TreeNode(4);

        const r1r = new TreeNode(2);
        r1r.left = new TreeNode(4);
        r1r.right = new TreeNode(3);

        root.left = r1l;
        root.right = r1r;

        const result = isSymmetricIterative(root);

        expect(result).to.be.true;
    });

    it('runs as expected with null root', () => {
        const root = new TreeNode(null);

        const result = isSymmetricIterative(root);

        expect(result).to.be.true;
    });

    it('runs as expected with false example', () => {
        const root = new TreeNode(1);

        const r1l = new TreeNode(2);
        r1l.right = new TreeNode(3);

        const r1r = new TreeNode(2);
        r1r.right = new TreeNode(3);

        root.left = r1l;
        root.right = r1r;

        const result = isSymmetricIterative(root);

        expect(result).to.be.false;
    });

    it('runs as expected with false children example', () => {
        const root = new TreeNode(1);
        const r1l = new TreeNode(2);
        const r1r = new TreeNode(null);

        root.left = r1l;
        root.right = r1r;

        const result = isSymmetric(root);

        expect(result).to.be.false;
    });
});

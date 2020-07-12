import { expect } from 'chai';
import { TreeNodeNext, connect } from './nextRightPointer';

describe('nextRightPoiner', () => {
    it('runs as expected', () => {
        const root = new TreeNodeNext(1);
        root.left = new TreeNodeNext(2);
        root.right = new TreeNodeNext(3);
        root.left.left = new TreeNodeNext(4);
        root.left.right = new TreeNodeNext(5);
        root.right.left = new TreeNodeNext(6);
        root.right.right = new TreeNodeNext(7);


        const expected = new TreeNodeNext(1);
        expected.left = new TreeNodeNext(2);
        expected.right = new TreeNodeNext(3);
        expected.left.next = expected.right;
        expected.left.left = new TreeNodeNext(4);
        expected.left.right = new TreeNodeNext(5);
        expected.left.left.next = expected.left.right;
        expected.right.left = new TreeNodeNext(6);
        expected.left.right.next = expected.right.left;
        expected.right.right = new TreeNodeNext(7);
        expected.right.left.next = expected.right.right;

        connect(root);

        expect(root.left.next?.val).to.equal(expected.left.next?.val);
        expect(root.left.left.next?.val).to.equal(expected.left.left.next?.val);
        expect(root.left.right.next?.val).to.equal(expected.left.right.next?.val);
    });

    it('runs as expected', () => {
        const root = null;

        const result = connect(root);

        expect(result).to.be.null;
    });
});

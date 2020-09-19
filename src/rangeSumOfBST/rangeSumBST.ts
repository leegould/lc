
import { expect } from 'chai';
import { rangeSumBST } from './rangeSumBST.test';
import { arrayToTree } from '../util/BinaryTree';

describe('Range Sum of BST', () => {
    it('runs as expected', () => {
        const input = arrayToTree([10,5,15,3,7,null,18]);
        const L = 7;
        const R = 15;
        const result = rangeSumBST(input, L, R);
        const expected = 32;
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const input = arrayToTree([10,5,15,3,7,13,18,1,null,6]); 
        const L = 6;
        const R = 10;
        const result = rangeSumBST(input, L, R);
        const expected = 23;
        expect(result).to.equal(expected);
    });
});

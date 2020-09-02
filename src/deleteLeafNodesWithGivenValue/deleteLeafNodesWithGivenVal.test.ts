import { expect } from 'chai';
import { arrayToTree, treeToArray } from '../util/BinaryTree';
import { removeLeafNodes } from './deleteLeafNodesWithGivenVal';

describe('deleteLeafNodesWithGivenValue', () => {
    it('runs as expected', () => {
        const input = arrayToTree([1,2,3,2,null,2,4]);
        const target = 2;
        const result = removeLeafNodes(input, target);
        const expected = [1,2,3,null,4];
        const resultArr = treeToArray(result);
        expect(resultArr).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = arrayToTree([1,3,3,3,2]);
        const target = 3;
        const result = removeLeafNodes(input, target);
        const expected = [1,3,2];
        const resultArr = treeToArray(result);
        expect(resultArr).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = arrayToTree([1,2,null,2,null,2]);
        const target = 2;
        const result = removeLeafNodes(input, target);
        const expected = [1,2,null,null];
        const resultArr = treeToArray(result);
        expect(resultArr).to.deep.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = arrayToTree([1,1,1]);
        const target = 1;
        const result = removeLeafNodes(input, target);
        const expected: any[] = [];
        const resultArr = treeToArray(result);
        expect(resultArr).to.deep.equal(expected);
    });
    it('runs as expected with fifth example', () => {
        const input = arrayToTree([1,2,3]);
        const target = 1;
        const result = removeLeafNodes(input, target);
        const expected = [1,2,3];
        const resultArr = treeToArray(result);
        expect(resultArr).to.deep.equal(expected);
    });
});

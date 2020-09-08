import { expect } from 'chai';
import { arrayToTree, treeToArray } from '../util/BinaryTree';
import { delNodes } from './deleteNodesAndReturnForest';

describe('Delete Nodes and return forest', () => {
    it('runs as expected', () => {
        const input = arrayToTree([1,2,3,4,5,6,7]);
        const delValues = [3,5];
        const result = delNodes(input, delValues);
        const expected = [[1,2,4],[6],[7]];
        const result0 = treeToArray(result[0]);
        const result1 = treeToArray(result[1]);
        const result2 = treeToArray(result[2]);
        expect(result0).to.deep.equal(expected[0]);
        expect(result1).to.deep.equal(expected[1]);
        expect(result2).to.deep.equal(expected[2]);
    });
});

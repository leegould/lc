import { expect } from 'chai';
import { arrayToTree, treeToArray } from '../util/BinaryTree';
import { mergeTrees } from './mergeTwoBinTrees';

describe('mergeTwoBinTrees', () => {
    it('runs as expected', () => {
        const t1 = arrayToTree([1,3,2,5,null,null]);
        const t2 = arrayToTree([2,1,3,null,4,null,7]);
        const result = mergeTrees(t1, t2);
        const resultArr = treeToArray(result);
        const expected = [3,4,5,5,4,0,7];
        expect(resultArr).to.deep.equal(expected);
    });
});

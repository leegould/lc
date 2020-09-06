import { expect } from 'chai';
import { arrayToTree } from '../util/BinaryTree';
import { maxLevelSum } from './maxLevelSumOfBinTree';

describe('maximumLevelSumOfBinaryTree', () => {
    it('runs as expected', () => {
        const input = arrayToTree([1,7,0,7,-8,null,null]);
        const result = maxLevelSum(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
});

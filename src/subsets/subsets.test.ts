import { expect } from 'chai';
import { subsets } from './subsets';

describe('subsets', () => {
    it('runs as expected', () => {
        const a = [1,2,3];

        const expected = [
            [3],
            [1],
            [2],
            [1,2,3],
            [1,3],
            [2,3],
            [1,2],
            []
        ];

        const result = subsets(a);

        expect(result.sort()).to.deep.equal(expected.sort());
    });
});

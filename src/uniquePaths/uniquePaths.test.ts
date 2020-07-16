import { expect } from 'chai';
import { uniquePaths } from './uniquePaths';

describe('uniquePaths', () => {
    it('runs as expected', () => {
        const m = 3;
        const n = 2;
        const result = uniquePaths(m, n);
        const expected = 3;
        expect(result).to.equal(expected);
    });

    it('runs as expected with 1 cell', () => {
        const m = 1;
        const n = 1;
        const result = uniquePaths(m, n);
        const expected = 1;
        expect(result).to.equal(expected);
    });
});
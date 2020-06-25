import { expect } from 'chai';
import { numIslands } from './numberOfIslands';

describe('numberOfIslands', () => {
    it('runs as expected', () => {
        const input = [
            ['1','1','1','1','0'],
            ['1','1','0','1','0'],
            ['1','1','0','0','0'],
            ['0','0','0','0','0'],
        ];

        const expected = 1;

        const result = numIslands(input);

        expect(result).to.equal(expected);
    });
    it('runs as expected with 3 islands', () => {
        const input = [
            ['1','1','0','0','0'],
            ['1','1','0','0','0'],
            ['0','0','1','0','0'],
            ['0','0','0','1','1'],
        ];

        const expected = 3;

        const result = numIslands(input);

        expect(result).to.equal(expected);
    });

    it('runs as expected with double start case', () => {
        const input = [
            ['0','1','0','0','0'],
            ['0','1','0','1','0'],
            ['1','1','1','1','0'],
            ['0','0','0','0','0'],
        ];

        const expected = 1;

        const result = numIslands(input);

        expect(result).to.equal(expected);
    });
});

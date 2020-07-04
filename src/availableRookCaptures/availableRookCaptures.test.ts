import { expect } from 'chai';
import { numRookCaptures } from './availableRookCaptures';

describe('availableRookCaptures', () => {
    it('runs as expected', () => {
        const board = [
            [".",".",".",".",".",".",".","."],
            [".",".",".","p",".",".",".","."],
            [".",".",".","R",".",".",".","p"],
            [".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".","."],
            [".",".",".","p",".",".",".","."],
            [".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".","."],
        ];
        const expected = 3;
        const result = numRookCaptures(board);
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const board = [
            [".",".",".",".",".",".",".","."],
            [".","p","p","p","p","p",".","."],
            [".","p","p","B","p","p",".","."],
            [".","p","B","R","B","p",".","."],
            [".","p","p","B","p","p",".","."],
            [".","p","p","p","p","p",".","."],
            [".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".","."],
        ];
        const expected = 0;
        const result = numRookCaptures(board);
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const board = [
            [".",".",".",".",".",".",".","."],
            [".",".",".","p",".",".",".","."],
            [".",".",".","p",".",".",".","."],
            ["p","p",".","R",".","p","B","."],
            [".",".",".",".",".",".",".","."],
            [".",".",".","B",".",".",".","."],
            [".",".",".","p",".",".",".","."],
            [".",".",".",".",".",".",".","."],
        ];
        const expected = 3;
        const result = numRookCaptures(board);
        expect(result).to.equal(expected);
    });
    it('runs as expected', () => {
        const board = [
            [".",".",".",".",".",".",".","."],
            [".",".","B","B","B","B","B","."],
            [".","p","B","p","p","p","B","p"],
            [".","p","B","p","R","p","B","p"],
            [".","p","B","p","p","p","B","p"],
            [".",".","B","B","B","B","B","."],
            [".",".",".","p","p","p",".","."],
            [".",".",".",".",".",".",".","."],
        ];
        const expected = 4;
        const result = numRookCaptures(board);
        expect(result).to.equal(expected);
    });
});

import { expect } from 'chai';
import { countBattleships } from './battleshipsInBoard';

describe('battleshipsInBoard', () => {
    it('runs as expected', () => {
        const board = [
            ['X','.','.','X'],
            ['.','.','.','X'],
            ['.','.','.','X'],
        ];
        const expected = 2;
        const result = countBattleships(board);
        expect(result).to.equal(expected);
    });
});

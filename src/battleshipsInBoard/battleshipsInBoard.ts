/**
 * Count battleships on a board
 * @param board the board
 * @returns how many battleships are on the board
 * @description runtime O()
 */
export function countBattleships(board: string[][]) {
    let count = 0;

    for(let i = 0; i < board.length;i++) {
        for(let j = 0; j < board[i].length;j++) {
            if (board[i][j] === 'X' && (i === 0 || board[i - 1][j] === '.') && (j === 0 || board[i][j - 1] === '.')) {
                count++;
            }
        }
    }

    return count;
}
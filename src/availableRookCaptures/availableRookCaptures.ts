/**
 * Number of rook captures
 * @param board the chess board
 * @returns a count of how many pawns can be captured
 * @description runtime O()
 */
export function numRookCaptures(board: string[][]) {
    let count = 0;

    for(let i = 0; i < board.length;i++) {
        for(let j = 0; j < board.length;j++) {
            if (board[i][j] === 'R') {

                for(let u = i - 1; u > 0;u--) {
                    if (board[u][j] === 'B') {
                        break;
                    }
                    if (board[u][j] === 'p') {
                        count++;
                        break;
                    }
                }

                for(let d = i + 1; d < board.length;d++) {
                    if (board[d][j] === 'B') {
                        break;
                    }
                    if (board[d][j] === 'p') {
                        count++;
                        break;
                    }
                }

                for(let l = j - 1; l > 0;l--) {
                    if (board[i][l] === 'B') {
                        break;
                    }
                    if (board[i][l] === 'p') {
                        count++;
                        break;
                    }
                }

                for(let r = j + 1; r < board.length;r++) {
                    if (board[i][r] === 'B') {
                        break;
                    }
                    if (board[i][r] === 'p') {
                        count++;
                        break;
                    }
                }
            }
        }
    }

    return count;
}

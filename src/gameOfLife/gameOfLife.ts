/**
 * Game of Life
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export function gameOfLife(board: number[][]) {
    const copy = board.map((arr) => {
        return arr.slice();
    });
    
    const colLen = copy[0].length - 1;
    const rowLen = copy.length - 1;

    function liveNeighbours(row: number, col: number) {
        return 0 +
            (row > 0 && col > 0 ? copy[row - 1][col - 1] : 0) +
            (row > 0 ? copy[row - 1][col] : 0) +
            (row > 0 && col < colLen ? copy[row - 1][col + 1] : 0) +
            (col > 0 ? copy[row][col - 1] : 0) +
            (col < colLen ? copy[row][col + 1] : 0) +
            (row < rowLen && col > 0 ? copy[row + 1][col - 1] : 0) +
            (row < rowLen ? copy[row + 1][col] : 0) +
            (row < rowLen && col < colLen ? copy[row + 1][col + 1] : 0);
    }

    function getNewValue(row: number, col: number) {
        const live = copy[row][col] === 1;
        const nbs = liveNeighbours(row, col);
        if (!live && nbs === 3 || live && nbs > 1 && nbs < 4) {
            return 1;
        } else {
            return 0;
        }
    }

    for(let i = 0;i< copy.length;i++) {
        for(let j = 0; j < copy[i].length;j++) {
            board[i][j] = getNewValue(i,j);
        }
    }

    return board; // Return for test
}
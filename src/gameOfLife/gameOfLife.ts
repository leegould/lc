/**
 * Game of Life
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export function gameOfLife(board: number[][]) {
    const colLen = board[0].length - 1;
    const rowLen = board.length - 1;
    const newBoard: number[][] = [];

    function liveNeighbours(row: number, col: number) {
        return 0 +
            (row > 0 && col > 0 ? board[row - 1][col - 1] : 0) +
            (row > 0 ? board[row - 1][col] : 0) +
            (row > 0 && col < colLen ? board[row - 1][col + 1] : 0) +
            (col > 0 ? board[row][col - 1] : 0) +
            (col < colLen ? board[row][col + 1] : 0) +
            (row < rowLen && col > 0 ? board[row + 1][col - 1] : 0) +
            (row < rowLen ? board[row + 1][col] : 0) +
            (row < rowLen && col < colLen ? board[row + 1][col + 1] : 0);
    }

    function getNewValue(row: number, col: number) {
        const live = board[row][col] === 1;
        const nbs = liveNeighbours(row, col);
        // console.log('cell', row, col, live, nbs);
        if (!live && nbs === 3 || live && nbs > 1 && nbs < 4) {
            return 1;
        } else {
            return 0;
        }
    }

    for(let i = 0;i< board.length;i++) {
        const newRow: number[] = [];
        for(let j = 0; j < board[i].length;j++) {
            newRow.push(getNewValue(i,j));
        }
        newBoard.push(newRow);
    }

    return newBoard;
}
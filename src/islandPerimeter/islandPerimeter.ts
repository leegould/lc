/**
 * Island Perimeter
 * @param grid the island grid
 * @returns the length of the perimeter
 * @description runtime O(n) space O(1) 
 */
export function islandPerimeter(grid: number[][]): number { 
    let sum = 0;

    for(let i = 0; i < grid.length;i++) {
        for(let j = 0; j < grid[i].length;j++) {
            if (grid[i][j] === 1) {
                if (j === 0 || grid[i][j - 1] === 0) {
                    sum++;
                }
                if (j === grid[i].length - 1 || grid[i][j + 1] === 0) {
                    sum++;
                }
                if (i === 0 || grid[i - 1][j] === 0) {
                    sum++;
                }
                if (i === grid.length - 1 || grid[i + 1][j] === 0) {
                    sum++;
                }
            }
        }
    }

    return sum;
};
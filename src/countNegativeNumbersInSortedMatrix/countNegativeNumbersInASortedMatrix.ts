/**
 * Count Negative Numbers in a sorted matrix
 * @param grid the matrix
 * @returns the number of negatives
 * @description runtime O(n) space O(1)
 */
export function countNegatives(grid: number[][]): number {
    let count = 0;

    for(let i = 0; i < grid.length;i++) {
        for(let j = 0; j < grid[i].length;j++) {
            if (grid[i][j] < 0) {
                count++;
            }
        }
    }

    return count;
}
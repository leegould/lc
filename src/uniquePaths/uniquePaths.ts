/**
 * Unique Paths
 * @param m 
 * @param n 
 * @returns the number of unique paths
 * @description runtime O(m * n) space O(m * n)
 */
export function uniquePaths(m: number, n: number): number {
    const grid: number[][] = Array.from(Array(m), () => new Array(n));
    for(let i = 0; i < m;i++) {
        grid[i][0] = 1;
    }
    for(let i = 1; i < n;i++) {
        grid[0][i] = 1;
    }

    for(let i = 1; i < m;i++) {
        for(let j = 1; j < n;j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }

    return grid[m - 1][n - 1];
};
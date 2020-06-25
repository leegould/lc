/**
 * Number of islands in a grid
 * @param grid the grid
 * @returns number of islands
 * @description runtime O()
 */
export function numIslands(grid: string[][]) {
    let count = 0;

    function dfs(x: number, y: number) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }

        if (x < grid.length - 1) {
            dfs(x + 1, y);
        }
        if (y < grid[x].length - 1) {
            dfs(x, y + 1);
        }
        if (x > 0) {
            dfs(x - 1, y);
        }
        if (y > 0) {
            dfs(x, y - 1);
        }
    }

    for (let i = 0;i <grid.length;i++) {
        let row = grid[i];
        for (let j = 0;j < row.length;j++) {
            if(grid[i][j] === '1') {
                count++;
                dfs(i,j);
            }
        }
    }


    return count;
}
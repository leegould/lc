/**
 * Matrix diagonal sum 
 * @param mat the matrix
 * @returns the sum
 * @description runtime O(n) space O(1)
 */
export function diagonalSum(mat: number[][]): number {
    let sum = 0;

    for(let i = 0;i < mat.length;i++) {
        sum += mat[i][i];

        if (i !== mat.length - 1 - i) {
            sum += mat[i][mat.length - 1 - i];
        }
    }

    return sum;
};

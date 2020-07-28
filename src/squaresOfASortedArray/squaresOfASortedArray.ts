/**
 * Squares of a sorted array
 * @param A The list of numbers
 * @returns the list of squared results
 * @description runtime O() space O()
 */
export function sortedSquares(A: number[]): number[] {
    return A.map((val) => val * val).sort((a, b) => a - b);
};
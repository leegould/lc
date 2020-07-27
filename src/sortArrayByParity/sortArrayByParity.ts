/**
 * Sort an array by even then odd numbers
 * @param A the list of numbers
 * @returns the list sorted by even then odd numbers
 * @description runtime O(n lg n) space O(1)
 */
export function sortArrayByParity(A: number[]): number[] {
    return A.sort((a,b) => a % 2 - b % 2);
};

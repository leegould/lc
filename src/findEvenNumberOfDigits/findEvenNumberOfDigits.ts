/**
 * find numbers with even number of digits.
 * @param nums the list of numbers
 * @returns how many of the numbers have even digits
 * @description runtime O(n) space O(1)
 */
export function findNumbers(nums: number[]): number {
    return nums.filter(x => x.toString().length % 2 === 0).length;
};
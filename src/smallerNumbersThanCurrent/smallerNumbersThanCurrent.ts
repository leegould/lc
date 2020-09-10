/**
 * Smaller numbers than current
 * @param nums the list of numbers
 * @returns array of results
 * @description runtime O(n lg n) space O(n)
 */
export function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map((num) => sorted.indexOf(num));
};

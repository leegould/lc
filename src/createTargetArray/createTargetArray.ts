/**
 * Create target array
 * @param nums the list of nums
 * @param index the list of indexes
 * @returns the target array
 * @description runtime O(n) space O(n)
 */
export function createTargetArray(nums: number[], index: number[]): number[] {
    const target: number[] = [];

    for(let i = 0; i < index.length;i++) {
        target.splice(index[i], 0, nums[i]);
    }

    return target;
};
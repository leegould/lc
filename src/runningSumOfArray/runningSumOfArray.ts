/**
 * Running sum of array
 * @param nums the array
 * @returns the array with sums
 * @description runtime O(n) space O(1)
 */
export function runningSum(nums: number[]): number[] {
    for(let i = 1;i < nums.length;i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
};

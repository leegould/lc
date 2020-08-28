/**
 * Move Zeroes
 * @param nums the list of numbers
 * @returns Do not return anything, modify nums in-place instead.
 * @description runtime O(n ^ 2) space O(1)
 */
export function moveZeroes(nums: number[]): void {
    for(let i = 0; i < nums.length;i++) {
        if (nums[i] === 0) {
            for(let j = i; j < nums.length;j++) {
                if (nums[j] !== 0) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
        }
    }
};
/**
 * Minimum value to get positive step by step sum
 * @param nums the list of nums
 * @returns the minimum number of steps
 * @description runtime O() space O()
 */
export function minStartValue(nums: number[]): number {
    let val = 1;
    let sum = 0;

    for(let i = 0; i < nums.length;i++) {
        sum += nums[i];
        val = Math.min(val, sum);
    }

    return val >= 1 ? 1 : Math.abs(val - 1);
};

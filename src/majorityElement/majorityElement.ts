/**
 * @param {number[]} nums
 * @return {number}
 */
export function majorityElement(nums: number[]) {
    const counts = {};
    for(let i = 0; i < nums.length;i++) {
        const num = nums[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    const sorted = Object.keys(counts).map(x => [x, counts[x]]).sort((a, b) => b[1] - a[1]);
    
    return parseInt(sorted[0][0]);
};
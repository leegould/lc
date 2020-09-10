/**
 * Smaller numbers than current
 * @param nums the list of numbers
 * @returns array of results
 * @description runtime O(n * n) space O(n)
 */
export function smallerNumbersThanCurrent(nums: number[]): number[] {
    const results = [];

    for(const num of nums) {
        let count = 0;
        for (let i = 0; i < nums.length;i++) {
            if (nums[i] < num) {
                count++;
            }
        }
        results.push(count);
    }

    return results;
};

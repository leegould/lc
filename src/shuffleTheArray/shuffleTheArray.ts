/** Shuffle the array
 * @param nums the list of numbs
 * @param n the length of the sublist
 * @returns a shuffled array
 * @description runtime O() space O()
 */
export function shuffle(nums: number[], n: number): number[] {
    const result = [];

    for(let i = 0;i < n;i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }

    return result;
};
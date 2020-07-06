/**
 * find duplicates in array
 * @param nums the list of numbers
 * @returns array of duplicates
 * @description runtime O()
 */
export function findDuplicates(nums: number[]) {
    const counts = new Array(nums.length + 1).fill(0);

    for(let i = 0; i < nums.length;i++) {
        counts[nums[i]]++;
    }

    const output: number[] = [];
    counts.map((val, idx) => {
        if (val > 1) {
            output.push(idx);
        }
    });
    return output;
}
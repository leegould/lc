/**
 * Decompress Run-Length Encoded List
 * @param nums the list of nums
 * @returns the generated list
 * @description runtime O() space O()
 */
export function decompressRLElist(nums: number[]): number[] {
    const out = [];

    for(let i = 0;i < nums.length;i += 2) {
        const freq = nums[i];
        const val = nums[i + 1];
        for(let j = 0; j < freq;j++) {
            out.push(val);
        }
    }

    return out;
};

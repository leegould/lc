/**
 * Maximum product of two elements in an array
 * @param nums the list of nums
 * @returns the maximum product
 * @description runtime O(n) space O(1)
 */
export function maxProduct(nums: number[]): number {
    let larger, smaller;
    if (nums[0] > nums[1]) {
        larger = nums[0];
        smaller = nums[1];
    } else {
        larger = nums[1];
        smaller = nums[0];
    }

    for(let i = 2; i < nums.length;i++) {
        const val = nums[i];
        if (val > smaller) {
            if (val > larger) {
                smaller = larger;
                larger = val;
            } else {
                smaller = val;
            }
        }
    }

    return ((larger - 1) * (smaller - 1));
};

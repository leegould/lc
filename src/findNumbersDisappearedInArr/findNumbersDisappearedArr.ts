/**
 * Find All Numbers Disappeared In An Array
 * @param nums the list of numbers
 * @returns the list of missing numbers
 * @description runtime O(n) space O(n)
 */
export function findDisappearedNumbers(nums: number[]): number[] {
    const result = [];
    const set = new Set(nums);

    for(let i = 1; i <= nums.length;i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }

    return result;
};

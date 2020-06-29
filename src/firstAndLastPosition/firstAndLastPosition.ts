/**
 * First and Last Position
 * @param nums list of numbers
 * @param target number to search for
 * @returns the first and last index of the target
 * @description runtime O()
 */
export function searchRange(nums: number[], target: number) {
    const indexes = [-1,-1];

    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        const mid = Math.floor((i + j) / 2);
        if (nums[mid] < target) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }

    if (nums[i] !== target) {
        return indexes;
    }
    indexes[0] = i;

    j = nums.length - 1;
    while(i < j) {
        const mid = Math.floor(((i + j) / 2) + 1);
        if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid;
        }
    }
    indexes[1] = j;

    return indexes;
}

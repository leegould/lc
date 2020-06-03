
/** Rotate Array
 * @param nums the numbers array
 * @param k the number to rotate the array by
 * @returns void - in place
 * @description runtime O()
 */
export function rotate(nums: number[], k: number) {
    if (nums.length < 1) {
        return;
    }

    for(let i = 1; i <= k % nums.length;i++) {
        const end = nums.pop();
        if (end !== undefined) {
            nums.unshift(end);
        }
    }
}
/**
 * plusOne
 * @param nums the list of numbers
 * @returns the list of numbers plus one
 * @note time complexity: O(n)
 * @note space complexity: O(n) 
 */
export function plusOne(nums: number[]) {
    let index = nums.length - 1;
    let value = nums[index] + 1;
    while(value > 0) {
        if (value === 10) {
            nums[index] = 0;
            index -= 1;
            if (index < 0) {
                nums.unshift(1);
                value = 0;
            } else {
                value = nums[index] + 1;
            }
        } else {
            nums[index] = value;
            value = 0;
        }
    }
    return nums;
}

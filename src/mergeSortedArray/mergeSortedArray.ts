export function merge(nums: number[], m: number, nums2: number[], n: number) {
    let i1 = 0;
    let i2 = 0;

    while(i1 < nums.length && i2 < nums2.length) {
        if (nums[i1] === 0) {
            nums[i1] = nums2[i2];
            i1++;
            i2++;
        } else if (nums[i1] <= nums2[i2]) {
            i1++;
        } else {
            nums[i1 + 1] = nums[i1];
            nums[i1] = nums2[i2];
            i2++;
        }        
    }

    return nums;
}
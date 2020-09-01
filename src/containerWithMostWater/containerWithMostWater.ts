/**
 * Container with most water
 * @param height the list of heights
 * @returns the max area
 * @description runtime O(n) space O(1)
 */
export function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left <= right) {
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
        if (height[left] >= height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return max;
};

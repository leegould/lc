/**
 * Longest consecutive numbers
 * @param nums the list of numbers
 * @returns the longest length of consecutive nums
 * @description runtime O(n)
 */
export function longestConsecutive(nums: number[]) {
    const set = new Set(nums);
    let max = 0;

    for(let num of set) {
        if (!set.has(num - 1)) {
            let next = num + 1;
            while(set.has(next)) {
                next += 1;
            }
            max = Math.max(max, next - num);
        }
    }

    return max;
}
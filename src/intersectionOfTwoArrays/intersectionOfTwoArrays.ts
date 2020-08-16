/**
 * Intersection of two arrays
 * @param nums1 the first list of nums
 * @param nums2 the second list of nums
 * @returns an intersection of both lists of nums
 * @description runtime O(n) space O(n)
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);

    for(let num of s2) {
        if (!s1.has(num)) {
            s2.delete(num);
        }        
    }

    return [...s2];
};

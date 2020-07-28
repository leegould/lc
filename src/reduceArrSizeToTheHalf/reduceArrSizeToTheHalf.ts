/**
 * Reduce Array Size to the Half
 * @param arr the array of numbers
 * @returns the minimum size of the set of numbers to remove
 * @description runtime O(n lg n) space O(n)
 */
export function minSetSize(arr: number[]): number {
    const counts = new Map<number, number>();

    for(let i = 0; i < arr.length;i++) {
        counts.set(arr[i], (counts.get(arr[i]) || 0) + 1)
    }

    const lengths = Array.from(counts.values()).sort((a,b) => b - a);
    const targetLen = arr.length / 2;
    let len = 0;
    let removed = 0;

    while(len < targetLen) {
        len += lengths[removed];
        removed++;
    }

    return removed;
};
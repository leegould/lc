/**
 * find the lucky numbers
 * @param arr the input
 * @returns the lucky number if found
 * @description runtime O(n)
 */
export function findLucky(arr: number[]) {
    const counts = new Array(500).fill(0);

    for(let i = 0;i < arr.length;i++) {
        const num = arr[i];
        counts[num]++;
    }

    for(let i = counts.length;i > 0;i--) {
        if (counts[i] === i) {
            return i;
        }
    }

    return -1;
}
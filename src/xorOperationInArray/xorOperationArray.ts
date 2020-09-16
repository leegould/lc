/**
 * XOR Operation in an Array
 * @param n the number
 * @param start the offset
 * @returns the xored output
 * @description runtime O(n) space O(n)
 */
export function xorOperation(n: number, start: number): number {
    const arr = Array(n);
    for(let i = 0; i < n;i++) {
        arr[i] = (i * 2) + start;
    }

    return arr.reduce((acc, curr) => acc ^= curr);
};

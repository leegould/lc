/**
 * Find N Unique Integeres Sum up to Zero
 * @param n the number
 * @returns array of length n summing zero
 * @description runtime O(n) space O(n)
 */
export function sumZero(n: number): number[] {
    const res = [];

    if (n % 2 !== 0) {
        res.push(0);
    }

    for(let i = 1;i <= Math.floor(n / 2);i++) {
        res.push(...[i, -i]);
    }

    return res;
};

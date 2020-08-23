/**
 * Fair Candy Swap
 * @param A the first list 
 * @param B the second list
 * @returns array of items that need to swap
 * @description runtime O(n) space O(n)
 */
export function fairCandySwap(A: number[], B: number[]): number[] {
    const sumA = A.reduce((prev, curr) => prev + curr);
    const sumB = B.reduce((prev, curr) => prev + curr);

    const diff = (sumA - sumB) / 2;

    const setA = new Set(A);
    for(const b of B) {
        if (setA.has(b + diff)) return [b + diff, b];
    }
    return [];
};

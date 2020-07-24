/**
 * Jewels in stones
 * @param J the list of jewels
 * @param S the list of stones
 * @returns the number of jewels in the stones
 * @description runtime O() space O()
 */
export function numJewelsInStones(J: string, S: string): number {
    const counts = new Map<string, number>();

    for(let i = 0; i < J.length;i++) {
        counts.set(J[i], 0);
    }

    for(let i = 0; i < S.length;i++) {
        if (counts.has(S[i])) {
            counts.set(S[i], (counts.get(S[i]) || 0) + 1);
        }
    }

    return [...counts.values()].reduce((prev, curr) => prev + curr);
};
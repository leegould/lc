/**
 * Last Stone Weight
 * @param stones the list of stones
 * @returns the weight of the last stone
 * @description runtime O(n lg n) space O()
 */
export function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => a - b);

    while(stones.length > 1) {
        const y = stones.pop() as number;
        const x = stones.pop() as number;
        const diff = y - x;

        if(diff > 0) {
            let idx = 0;
            while(diff > stones[idx]) {
                idx++;
            }
            stones.splice(idx, 0, diff);
        }
    }
    return stones[0] || 0;
};

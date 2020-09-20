/**
 * Maximum Number of Coins you can get
 * @param piles the list of piles
 * @returns the max number
 * @description runtime O(n lg n) space O(1)
 */
export function maxCoins(piles: number[]): number {
    let sum = 0;
    piles.sort((a, b) => b - a);

    const len = piles.length - (piles.length / 3);

    for(let i = 0; i < len;i = i + 2) {
        sum += piles[i + 1];
    }

    return sum;
};

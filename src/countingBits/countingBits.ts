/**
 * Counting bits
 * @param num the target number
 * @returns array of numbers, how many bits
 * @description runtime O() space O()
 */
export function countBits(num: number): number[] {
    const results = [];

    for(let i = 0; i <= num;i++) {
        results.push(i.toString(2).replace(/0/g,'').length);
    }

    return results;
};
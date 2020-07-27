/**
 * Hamming Distance
 * @param x the first number
 * @param y the second number
 * @returns how many binary digits differ
 * @description runtime O() space O()
 */
export function hammingDistance(x: number, y: number): number {
    return (x^y).toString(2).replace(/0/g,'').length;
};
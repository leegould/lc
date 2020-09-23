/**
 * Maximum 69 Number
 * @param num the number
 * @returns the maximum
 * @description runtime O() space O()
 */
 export function maximum69Number (num: number): number {
    return parseInt(num.toString().replace(/6/, '9'));
};

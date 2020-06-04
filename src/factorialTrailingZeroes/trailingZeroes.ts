/** Trailing zeroes
 * @param n the number to get the factorial of
 * @returns how many trailing zeroes are in the product
 * @description runtime O()
 */
export function trailingZeroes(n: number) {
    let count = 0;

    for(let i = 5; Math.floor(n / i) >= 1;i *= 5) {
        count += Math.floor(n / i);
    }
    
    return count;
}
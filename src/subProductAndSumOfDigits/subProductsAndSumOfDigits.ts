/**
 * Subtract the Product and Sum of Digits of an integer
 * @param n the number
 * @returns the diff between the product and the sum
 * @description runtime O(n) space O(1)
 */
export function subtractProductAndSum(n: number): number {
    let product = 1;
    let sum = 0;

    while(n > 0) {
        const digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10);
    }

    return product - sum;
};

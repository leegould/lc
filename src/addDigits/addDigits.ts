/**
 * Add Digits
 * @param num the number
 * @returns the result of adding until there is one digit
 * @description runtime O(lg n) space O(1)
 */
export function addDigits(num: number): number {
    let n = num;

    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
            console.log('inner', sum, n);
        }
        n = sum;
        console.log('outer', n);
    }

    return n;
};

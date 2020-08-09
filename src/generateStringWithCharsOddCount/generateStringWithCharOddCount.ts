/**
 * Generate a string with characters that have odd counts
 * @param n the number of characters in the string
 * @returns a string with the number of characters that have odd counts
 * @description runtime O(n) space O(1)
 */
export function generateTheString(n: number): string {
    if (n  % 2 === 0) {
        return 'a'.repeat(n - 1) + 'b';
    }
    return 'a'.repeat(n);
};

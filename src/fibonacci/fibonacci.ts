/**
 * Fibonacci number
 * @param n the number to target
 * @returns the nth fibonacci number
 * @description runtime O(n)
 */
export function fib(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    function fibn(n: number, memo: number[]): number {
        if (memo.length > n) {
            return memo[n];
        }
        memo[n] = fibn(n - 1, memo) + fibn(n - 2, memo);
        return memo[n];
    }
    const fibs = [0, 1];

    return fibn(n - 1, fibs) + fibn(n - 2, fibs);
}
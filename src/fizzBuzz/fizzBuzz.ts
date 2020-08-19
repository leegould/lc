/**
 * Fizz Buzz
 * @param n the number of items to include
 * @returns the array 
 * @description runtime O(n) space O(n)
 */
export function fizzBuzz(n: number): string[] {
    const result = [];

    for(let i = 1; i <= n;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(i.toString());
        }
    }

    return result;
};

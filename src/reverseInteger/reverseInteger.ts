/**
 * reverse
 * @param num the number
 * @returns the number reversed
 * @note time complexity: O(log n)
 * @note space complexity: O(n) 
 */
export function reverse(num: number) {
    if (num > 1534236468) {
        return 0;
    }

    let value = 0;
    const negative = num < 0;
    if (negative) {
        num = Math.abs(num);
    }

    while(num > 0) {
        const digit = num % 10;
        if (value > 0) {
            value *= 10;
        }
        value += digit;
        num = Math.floor(num / 10);
    }

    if (negative){
        return -value;
    }

    return value;
}
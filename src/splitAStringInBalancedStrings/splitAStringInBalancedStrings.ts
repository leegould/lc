/**
 * Split a String in Balanced Strings
 * @param s the string
 * @returns the number of splits
 * @description runtime O(n) space O(n)
 */
export function balancedStringSplit(s: string): number {
    let counter = 0;
    const stack: string[] = [];

    for(const char of s.split('')) {
        if (stack.length === 0) {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] === char) {
                stack.push(char);
            } else {
                stack.pop();
                if (stack.length === 0) {
                    counter++;
                }
            }
        }
    }

    return counter;
};

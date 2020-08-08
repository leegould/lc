/**
 * Remove Outermost Parentheses
 * @param S the string
 * @returns the string with outermost paren removed.
 * @description runtime O(n) space O(n)
 */
export function removeOuterParentheses(S: string): string {
    const stack = [];
    let value = '';

    for(let i = 0; i < S.length;i++) {
        const char = S.charAt(i);
        if (char === '(') {
            stack.push(char);
            if (stack.length > 1) {
                value += char;
            }
        } else {
            if (stack.length > 1) {
                value += char;
            }
            stack.pop();
        }
    }

    return value;
};

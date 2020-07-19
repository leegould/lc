/**
 * score of parentheses
 * @param S the string of parentheses
 * @returns count of the score
 * @description runtime O(n) space O(n)
 */
export function scoreOfParentheses(S: string): number {
    const stack = [];
    for(let paren of S) {
        if (paren === '(') {
            stack.push(-1);
        } else {
            let count = 0;
            while(stack[stack.length - 1] !== -1) {
                count += stack.pop() as number;
            }
            stack.pop();
            stack.push(count === 0 ? 1 : count * 2);
        }
    }

    return stack.reduce((sum, curr) => sum += curr);
};
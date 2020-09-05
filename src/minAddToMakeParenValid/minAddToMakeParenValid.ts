/**
 * Minimum Add to Make Parentheses Valid
 * @param S the string
 * @returns how many parens need to be added to make valid
 * @description runtime O(n) space O(n)
 */
export function minAddToMakeValid(S: string): number {
    let counter = 0;
    const stack = [];

    for(let i = 0; i < S.length;i++) {
        if (S[i] === '('){
            stack.push(S[i]);
        } else if (S[i] === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                counter++;
            }
        }
    }

    return stack.length + counter;
};

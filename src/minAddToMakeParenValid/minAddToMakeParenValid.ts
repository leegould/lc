/**
 * Minimum Add to Make Parentheses Valid
 * @param S the string
 * @returns how many parens need to be added to make valid
 * @description runtime O(n) space O(1)
 */
export function minAddToMakeValid(S: string): number {
    let open = 0;
    let closed = 0;

    for(let i = 0; i < S.length;i++) {
        if (S[i] === '('){
            open++;
        } else if (S[i] === ')') {
            if (open > 0) {
                open--;
            } else {
                closed++;
            }
        }
    }

    return open + closed;
};

/** Remove Duplicate Adjacents
 * @param s the string
 * @returns the unique string
 * @description runtime O(len(s))
 */
export function removeDuplicates(s: string) {
    if (!s || s.length < 1) {
        return s;
    }

    const stack = [];

    for(let i = 0; i < s.length;i++) {
        if (s[i] !== stack[stack.length - 1]) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return stack.join('');
}
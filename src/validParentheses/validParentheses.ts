/**
 * Valid Parentheses checker
 * @param s the string to check
 * @returns true if valid, false otherwise
 * @description runtime O()
 */
export function isValid(s: string) {
    const stack: string[] = [];

    for(let i = 0; i < s.length;i++) {
        const char = s[i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }

            const last = stack.pop();

            if (char === ")" && last !== "(" || char === "}" && last !== "{" || char === "]" && last !== "[") {
                return false;
            }
        }
    }

    return stack.length === 0;
}
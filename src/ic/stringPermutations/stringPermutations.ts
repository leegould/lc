/**
 * Find all permutations of a string
 * @param str the string to find permutations of
 * @returns the permutations of the string
 * @description runtime O(n) space O(n) <- callstack size
 */
export function stringPermutations(str: string) {
    if (str.length === 1) {
        return new Set([str]);
    }

    const p = new Set();
    const sub = stringPermutations(str.slice(0, str.length - 1)) as Set<string>;
    for(let item of sub) {
        for(let i = 0; i <= item.length;i++) {
            p.add(item.slice(0, i) + str[str.length - 1] + item.slice(i));
        }
    }
    return p;
}
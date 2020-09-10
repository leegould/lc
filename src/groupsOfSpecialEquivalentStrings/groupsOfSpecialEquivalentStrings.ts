/**
 * Groups of Special-Equivalent Strings
 * @param A The list of strings
 * @returns how many equiv groups
 * @description runtime O(n lg n) space O(n)
 */
export function numSpecialEquivGroups(A: string[]): number {
    const set = new Set();

    for(let str of A) {
        let even = [];
        let odd = [];
        for(let i = 0; i < str.length;i++) {
            if (i % 2 === 0) {
                even.push(str.charAt(i));
            } else {
                odd.push(str.charAt(i));
            }
        }
        set.add([...even.sort() , ...odd.sort()].join(''));
    }

    return set.size;
};

/**
 * Letter Combinations
 * @param digits the digits
 * @returns combinations of the digits
 * @description runtime O(V + E) space O()
 */
export function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return [];
    }

    const map = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
    ]);

    let results: string[] = [];

    function recurse(count: number, entry: string) {
        if (count === digits.length) {
            results.push(entry);
            return;
        }

        for(const char of map.get(digits[count]) as string) {
            recurse(count + 1, entry + char);
        }
    }

    recurse(0, '');

    return results;
};


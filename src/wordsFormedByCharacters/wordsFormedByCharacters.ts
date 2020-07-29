/**
 * Words that can be formed by characters
 * @param words the list of words
 * @param chars the list of chars
 * @returns the sum of lengths of good words
 * @description runtime O(n) space O(n)
 */
export function countCharacters(words: string[], chars: string): number {
    function mapFromStr(str: string) {
        const counts = new Map();
        Array.from(str).map((char) => counts.set(char, (counts.get(char) || 0) + 1));
        return counts;
    }

    function contains(str: string, map: Map<string, number>) {
        const strmap = mapFromStr(str);
        for(const [ key, val ] of strmap) {
            if (!map.has(key) || val > (map.get(key) || 0)) {
                return false;
            }
        }
        return true;
    }

    let sum = 0;
    const charMap = mapFromStr(chars);
    for(const word of words) {
        if (contains(word, charMap)) {
            sum += word.length;
        }
    }

    return sum;
};

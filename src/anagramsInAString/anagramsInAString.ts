
/**
 * find anagrams in string
 * @param s the string to search
 * @param p the string to search for
 * @returns the indicies of matches of anagrams
 * @description runtime O()
 */
export function findAnagrams(s: string, p: string) {
    const indicies: number[] = [];

    function countCharsInStr(str: string) {
        const chars = new Map();
        for(let i = 0; i < str.length;i++) {
            chars.set(str[i], chars.has(str[i]) ? chars.get(str[i]) + 1 : 1);
        }
        return chars;
    }

    function mapMatch(map1: Map<string, number>, map2: Map<string, number>) {
        for(let m1 of map1.entries()) {
            if (!map2.has(m1[0]) || map2.get(m1[0]) !== m1[1]) {
                return false;
            }
        }
        return true;
    }

    const pmap = countCharsInStr(p);

    for(let i = 0; i < (s.length - p.length) + 1;i++) {
        const smap = countCharsInStr(s.slice(i, i + p.length));
        if (mapMatch(pmap, smap)) {
            indicies.push(i);
        }
    }

    return indicies;
}
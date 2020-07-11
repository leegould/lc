
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

    const pmap = countCharsInStr(p);


    let count = 0;
    let l = 0;
    let r = 0;

    while (r < s.length) {
        const rchar = s.charAt(r);
        if (pmap.has(rchar)) {
            if (pmap.get(rchar) >= 1) {
                count++;
            }
            pmap.set(rchar, pmap.get(rchar) - 1);
        }

        if (count === p.length) {
            indicies.push(l);
        }

        if (r - l + 1 === p.length) {
            const lchar = s.charAt(l);
            if (pmap.has(lchar)) {
                if (pmap.get(lchar) >= 0) {
                    count--;
                }
                pmap.set(lchar, pmap.get(lchar) + 1);
            }
            l++;
        }
        r++;
    }

    return indicies;
}
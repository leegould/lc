/**
 * Valid Anagram
 * @param s the first string
 * @param t the second string
 * @returns true if t is an anagram of s, false otherwise
 * @description runtime O(n) space O(1) - map is fixed size
 */
export function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    
    const smap = new Map();
    const tmap = new Map();

    for(let i = 0; i < s.length;i++) {
        smap.set(s[i], smap.has(s[i]) ? smap.get(s[i]) + 1 : 1);
        tmap.set(t[i], tmap.has(t[i]) ? tmap.get(t[i]) + 1 : 1);
    }

    for(let [key, val] of smap) {
        if (!tmap.has(key) || tmap.get(key) !== val) {
            return false;
        }
    }

    return true;
};

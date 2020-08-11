/**
 * Shortest Distance to a Character
 * @param S The string
 * @param C the char
 * @returns array of the shortest distances to the char
 * @description runtime O(n ^ 2?) space O(n)
 */
export function shortestToChar(S: string, C: string): number[] {
    const res = [];

    const locations = [];
    for(let i = 0; i < S.length;i++) {
        if (S.charAt(i) === C) {
            locations.push(i);
        }
    }
    
    for(let i = 0; i < S.length;i++) {
        let min = Infinity;
        for(let j = 0; j < locations.length;j++) {
            min = Math.min(min, Math.abs(locations[j] - i));
        }
        res.push(min);
    }

    return res;
};

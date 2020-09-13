/**
 * Shuffle String
 * @param s the string
 * @param indices the list of indicies
 * @returns the string shuffled
 * @description runtime O(n) space O(n) 
 */
export function restoreString(s: string, indices: number[]): string {
    let out = Array(indices.length);
    const str = s.split('');

    for(let i = 0; i < indices.length;i++) {
        const idx = indices[i];
        out[idx] = str[i];
    }

    return out.join('');
};

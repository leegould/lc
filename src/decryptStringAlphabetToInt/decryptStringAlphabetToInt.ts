/**
 * Decrypt String Alphabet and Int
 * @param s the string
 * @returns the decrypted string
 * @description runtime O(n) space O(1)
 */
export function freqAlphabets(s: string): string {
    const map = ' abcdefghijklmnopqrstuvwxyz'.split('');
    
    return s.replace(/(\d\d#|\d)/g, match => map[parseInt(match.length === 3 ? match[0] + match[1] : match)]);
};

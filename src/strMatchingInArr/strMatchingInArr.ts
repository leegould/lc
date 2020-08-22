/**
 * String Matching In Array
 * @param words the list of words
 * @returns words that are sub words 
 * @description runtime O() space O()
 */
export function stringMatching(words: string[]): string[] {
    return words.filter(word => words.some(w => w !== word && w.includes(word)));
};

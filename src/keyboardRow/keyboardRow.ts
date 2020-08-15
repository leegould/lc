/**
 * Keyboard row
 * @param words the list of words
 * @returns the words typeable for each row
 * @description runtime O(n * len(n)) space O(n)
 */
export function findWords(words: string[]): string[] {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    return words.filter(word =>
        rows.some(row => 
            [...word.toLowerCase()].every(char =>
                row.includes(char)
            )
        )
    );
};
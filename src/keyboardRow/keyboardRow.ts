/**
 * Keyboard row
 * @param words the list of words
 * @returns the words typeable for each row
 * @description runtime O(n * wordlen) space O(n)
 */
export function findWords(words: string[]): string[] {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    function inCharset(word: string, charset: string) {
        for(const char of word.split('')) {
            if (charset.indexOf(char.toLowerCase()) < 0) {
                return false;
            }
        }
        return true;
    }

    const results = [];
    for(const word of words) {
        console.log('check', word, inCharset(word, rows[0]), inCharset(word, rows[0]), inCharset(word, rows[0]))
        if (inCharset(word, rows[0]) || inCharset(word, rows[1]) || inCharset(word, rows[2])) {
            results.push(word);
        }
    }

    return results;
};
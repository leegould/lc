/**
 * Unique Morse Representations
 * @param words the list of words
 * @returns the number of unique morse representations
 * @description runtime O(n) space O(n)
 */
export function uniqueMorseRepresentations(words: string[]): number {
    const results = new Set();

    const code = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];

    for(const word of words) {
        let codeword = '';
        for(const letter of word.split('')) {
            codeword += code[letter.charCodeAt(0) - 97];
        }
        results.add(codeword);
    }
    
    return results.size;
};

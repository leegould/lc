/**
 * Occurrences After Bigram
 * @param text the text
 * @param first the first word
 * @param second the third word
 * @returns array of words, the second and third
 * @description runtime O(n) space O(n)
 */
export function findOcurrences(text: string, first: string, second: string): string[] {
    const res = [];
    const textArr = text.split(' ');
    for(let i = 0; i < (textArr.length - 2);i++) {
        if (textArr[i] === first && textArr[i + 1] === second) {
            res.push(textArr[i + 2]);
        }
    }
    return res;
};

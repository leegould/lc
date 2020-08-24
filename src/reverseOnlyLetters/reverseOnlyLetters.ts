/**
 * Reverse Only Letters
 * @param S the string to reverse
 * @returns the reversed string
 * @description runtime O(n) space O(n)
 */
export function reverseOnlyLetters(S: string): string {
    function isLetter(c: number) {
        return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
    }

    let left = 0;
    let right = S.length - 1;
    const result = S.split('');

    while (left < right) {
        if (!isLetter(S.charCodeAt(left))) {
            left++;
        } else if (!isLetter(S.charCodeAt(right))) {
            right--;
        } else {
            const temp = result[left];
            result[left] = result[right];
            result[right] = temp;
            left++;
            right--;
        }
    }
    return result.join('');
};

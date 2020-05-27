
/**
 * isPalindrome
 * @param str the string to check
 * @returns true if it is a palindrome, false otherwise
 * runtime: O(len(s) / 2)
 */
export function isPalindrome(s: string) {
    const strArr = s.replace(/\W/g, '').toLowerCase().split('');
    for(let i = 0; i < Math.floor(strArr.length / 2);i++) {
        if (strArr[i] !== strArr[strArr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
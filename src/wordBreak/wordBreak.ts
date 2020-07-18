/**
 * Word break
 * @param s the string to look for
 * @param wordDict the list of words
 * @returns true if the word can be made from the dict, false otherwise
 * @description runtime O(n ^ 2) space O(n)
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i = 0; i <= s.length;i++) {
        for(let j = 0; j < i; j++) {
            if (dp[j] === true && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};
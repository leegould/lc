/**
 * Kids with the greatest number of candies
 * @param candies the list of candies
 * @param extraCandies how many extras
 * @returns array of if each kid can have the most
 * @description runtime O(n) space O(n)
 */
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const results = [];

    const max = Math.max(...candies);

    for(const kid of candies) {
        results.push(kid + extraCandies >= max);
    }

    return results;
};

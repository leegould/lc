/**
 * Daily Temperatures
 * @param T the list of temps
 * @returns the number of days till its warmer
 * @description runtime O(n ^ 2) space O(n)
 */
export function dailyTemperatures(T: number[]): number[] {
    const results = [];

    for(let i = 0; i < T.length;i++) {
        const temp = T[i];
        let days = 0;
        for(let j = 0;j < T.length - i;j++) {
            const compare = T[i + j];
            if (compare > temp) {
                days = j;
                break;
            }
        }
        results.push(days);
    }

    return results;
};
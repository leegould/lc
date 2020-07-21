/**
 * Daily Temperatures
 * @param T the list of temps
 * @returns the number of days till its warmer
 * @description runtime O(n) space O(n)
 */
export function dailyTemperatures(T: number[]): number[] {
    const res = Array(T.length).fill(0);
    const stack: any[] = [];

    for(let i = T.length - 1;i >= 0;i--) {
        const temp = T[i];
        while(stack.length > 0 && stack[stack.length - 1].temp <= temp) {
            stack.pop();
        }
        res[i] = stack.length === 0 ? 0 : stack[stack.length - 1].idx - i;
        stack.push({temp, idx: i});
    }
    
    return res;
};
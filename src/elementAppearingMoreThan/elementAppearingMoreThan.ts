/**
 * Element Appearing more than 25% of the time
 * @param arr the list of numbers
 * @returns the element which appears the most
 * @description runtime O(n) space O(1)
 */
export function findSpecialInteger(arr: number[]): number {
    let count = 1;
    let num = arr[0];
    for(let i = 1; i < arr.length;i++) {
        const item = arr[i];
        if (item !== num) {
            count = 1;
            num = item;
        } else {
            count++;
            if (count > arr.length / 4) {
                return item;
            }
        }
    }
    return num;
};

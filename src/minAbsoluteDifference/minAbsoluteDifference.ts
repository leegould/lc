/**
 * Minimum Absolute Difference
 * @param arr the array of numbers
 * @returns an array of minimum diff values
 * @description runtime O(n lg n) space O(n ^ 2)
 */
export function minimumAbsDifference(arr: number[]): number[][] {
    let result = [];

    arr.sort((a, b) => a - b);
    let min = Infinity;

    for(let i = 0; i < arr.length - 1;i++) {
        const diff = arr[i + 1] - arr[i];
        if (diff < min) {
            min = diff;
            result = [];
        }
        if (diff === min) {
            result.push([arr[i], arr[i + 1]]);
        }
    }

    return result;
};

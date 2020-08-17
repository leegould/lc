/**
 * Can Make Arithmetic Progression From Sequence
 * @param arr the array of numbers
 * @returns true if can be a progression, false otherwise
 * @description runtime O(n lg n) space O(1)
 */
export function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a,b) => a - b);

    let step = arr[1] - arr[0];
    for(let i = 1; i < arr.length;i++) {
        if (Math.abs(arr[i] - arr[i - 1]) !== step) {
            return false;
        }
    }

    return true;
};

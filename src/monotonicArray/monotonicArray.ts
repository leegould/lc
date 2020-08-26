/**
 * Monotonic Array
 * @param A the list of numbers
 * @returns true if monotonic, false otherwise
 * @description runtime O(n) space O(1)
 */
export function isMonotonic(A: number[]): boolean {
    const positive = A[A.length - 1] - A[0] > 0;
    for(let i = 1; i < A.length;i++) {
        if (positive) {
            if (A[i] < A[i - 1]) {
                return false;
            }
        } else {
            if (A[i] > A[i - 1]) {
                return false;
            }
        }
    }
    return true;
};

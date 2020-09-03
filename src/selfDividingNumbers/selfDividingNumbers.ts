/**
 * Self Dividing numbers
 * @param left the left bound
 * @param right the right bound
 * @returns a list of self dividing numbers
 * @description runtime O(n * n) space O(n)
 */
export function selfDividingNumbers(left: number, right: number): number[] {
    const results = [];

    for(let i = left; i <= right;i++) {
        let selfDividing = true;
        for(const digitStr of i.toString().split('')) {
            const digit = parseInt(digitStr);
            if (!selfDividing || digit === 0 || i % digit !== 0) {
                selfDividing = false;
                break;
            }
        }
        if (selfDividing) {
            results.push(i);
        }
    }

    return results;
};

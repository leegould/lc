/**
 * Baseball game
 * @param ops the list of operations
 * @returns the sum of points
 * @description runtime O(n) space O(n)
 */
export function calPoints(ops: string[]): number {
    let sum = 0;
    let valid: number[] = [];

    for(let i = 0; i < ops.length;i++) {
        const op = ops[i];
        switch(op) {
            case '+':
                let score = 0;
                if (valid.length > 0) {
                    score += valid[valid.length - 1];
                }
                if (valid.length > 1) {
                    score += valid[valid.length - 2];
                }
                sum += score;
                valid.push(score);
                break;
            case 'D':
                if (valid.length > 0) {
                    const score = valid[valid.length - 1] * 2;
                    sum += score;
                    valid.push(score);
                }
                break;
            case 'C':
                if (valid.length > 0) {
                    const score = valid.pop() || 0;
                    sum -= score;
                }
                break;
            default:
                const num = parseInt(op, 10);
                sum += num;
                valid.push(num);
                break;
        }
    }

    return sum;
};


/**
 * Build a target array using stack operations
 * @param target array of numbers
 * @param n numbers to use upto
 * @description runtime O()
 */
export function buildArray(target: number[], n: number) {
    const result = [];
    let last = 0;

    for(let i = 0; i < target.length;i++) {
        const t = target[i];
        console.log('target', t, last);
        if (t - last > 1) {
            for(let j = 1; j < t - last;j++) {
                result.push('Push');
                result.push('Pop');
            } 
        }
        result.push('Push');
        last = t;
    }

    return result;
}
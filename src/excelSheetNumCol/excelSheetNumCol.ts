/**
 * Convert number to column title
 * @param n the number
 * @returns the column title
 * @description runtime O()
 */
export function convertToTitle(n: number) {
    let out = "";
    while(n > 0) {
        out += String.fromCharCode(65 + ((n - 1) % 26));
        n = Math.floor((n - 1) / 26);
    }
    return out.split('').reverse().join('');
}
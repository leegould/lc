/** maximum69Number
 * @param n the number
 * @returns maximum number with one digit change
 * @description runtime O(digits(n))
 */
export function maximum69Number(n: number) {
    const nstr = n.toString().split('');
    for(let i = 0; i < nstr.length;i++) {
        // console.log('nstr', i, nstr[i])
        if (nstr[i] === "6") {
            nstr[i] = "9";
            break;
        }
    }
    return parseInt(nstr.join(''));
}
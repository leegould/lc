/** Remove Duplicate Adjacents
 * @param s the string
 * @returns the unique string
 * @description runtime O()
 */
export function removeDuplicates(s: string) {
    if (!s || s.length < 1) {
        return s;
    }

    let arr = s.split('');
    let loop = true;

    while (loop) {
        loop = false;
        for(let i = 0; i < arr.length - 1;i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2);
                loop = true;
                break;
            }
        }
    }

    return arr.join('');
}
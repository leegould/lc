/**
 * Find common characters
 * @param arr the array of strings
 * @returns the common characters in the arr
 * @description runtime O()
 */
export function commonChars(arr: string[]) {
    let first = arr[0].split('');

    for(let i = 1; i < arr.length;i++) {
        const str = arr[i].split('');
        first = first.filter(char => {
            let idx = str.indexOf(char);
            if (idx > -1) {
                str[idx] = 'done';
                return true;
            }
            return false;
        })
    }

    return first;
}
/**
 * Excel Sheet Title To Number
 * @param title the column title
 * @returns the number of the column
 * @description runtime O()
 */
export function titleToNumber(title: string) {
    if (!title) {
        return 0;
    }
    const titleArr = [...title];
    let sum = 0;
    for(let i = 0; i < titleArr.length;i++) {
        const val = parseInt(titleArr[i], 36) - 9;
        sum += val * Math.pow(26, titleArr.length - i - 1);
    }
    return sum;
}
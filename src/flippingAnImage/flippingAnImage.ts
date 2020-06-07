
/** Flip and invert image
 * @param img the image
 * @returns the image flipped horizontally and inverted
 * @description runtime O(n ^ 2)
 */
export function flipAndInvertImage(img: number[][]) {
    for(let i = 0; i < img.length;i++)
    {
        const row = img[i];
        for(let j = 0;j < row.length / 2;j++) {
            const temp = row[j] === 1 ? 0 : 1;
            row[j] = row[row.length - 1 - j] === 1 ? 0 : 1;
            row[row.length - 1 - j] = temp;
        }
    }
    return img;
}
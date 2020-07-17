

/** max number of balloons
 * @text the input string
 * @returns the number of instances of the word balloons
 * @description runtime O(n) space O(1)
 */
export function maxNumberOfBalloons(text: string): number {
    const map = new Map<string, number>();

    for(let letter of 'balloon'.split('')) {
        map.set(letter, 0);
    }

    for(let letter of text.split('')) {
        if (map.has(letter)) {
            map.set(letter, (map.get(letter) || 0) + 1);
        }
    }

    for(let double of 'lo'.split('')) {
        map.set(double, Math.floor((map.get(double) || 0) / 2));
    }

    return Math.min(...map.values())
};
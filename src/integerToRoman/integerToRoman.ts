/** intToRoman
 * @param num the number to convert
 * @returns the roman numeral equivalent
 */
export function intToRoman(num: number) {
    const values = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }

    return Object.keys(values).map(val => parseInt(val)).sort((a, b) => b - a).reduce((acc, current) => {
        while (num >= current) {
            num -= current;
            acc += values[current];
        }
        return acc;
    }, '')
}
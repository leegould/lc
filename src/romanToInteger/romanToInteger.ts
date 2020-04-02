export function romanToInt(roman: string) {
    const romanNumerals = new Set([
        { value: 1000, roman: 'M' },
        { value: 900, roman:'CM' },
        { value: 500, roman: 'D' },
        { value: 400, roman: 'CD' },
        { value: 100, roman: 'C' },
        { value: 90, roman: 'XC' },
        { value: 50, roman: 'L' },
        { value: 40, roman: 'XL' },
        { value: 10, roman: 'X' },
        { value: 9, roman: 'IX' },
        { value: 5, roman: 'V' },
        { value: 4, roman: 'IV' },
        { value: 1, roman: 'I' },
    ]);
    
    let result = 0;
    for (let rn of romanNumerals) {
        while (roman.startsWith(rn.roman)) {
            roman = roman.substr(rn.roman.length);
            result += rn.value;
        }
    }
    return result;
}
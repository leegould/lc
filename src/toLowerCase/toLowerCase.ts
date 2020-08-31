/**
 * To Lower Case
 * @param str the string to lowercase
 * @returns the string in lowercase
 * @description runtime O(n) space O(n)
 */ 
export function toLowerCase(str: string): string {
    let result = '';
    for(let i = 0; i < str.length;i++) {
        let charCode = str.charCodeAt(i);
        if (charCode > 64 && charCode < 91) {
            charCode = charCode + 32;
        }
        result += String.fromCharCode(charCode);
    }
    return result;
};

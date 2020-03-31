/**
 * strStr
 * @param haystack the string to search in
 * @param needle the string to search for
 * @returns index of the needle, or -1
 * @note time complexity: O()
 * @note space complexity: O() 
 */
export function strStr(haystack: string, needle: string) {
    for(let i = 0; i < haystack.length - needle.length;i++) {
        for(let j = 0; j < needle.length;j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
            return i;
        }
    }
    return -1;
}

// export function strStrSubstr(haystack: string, needle: string) {
//     for(let i = 0; i < haystack.length - needle.length;i++) {
//         if (haystack.substr(i, needle.length) === needle) {
//             return i;
//         }
//     }
//     return -1;
// }

// export function strStrSlice(haystack: string, needle: string) {
//     for(let i = 0; i < haystack.length - needle.length;i++) {
//         const substr = haystack.slice(i, i + needle.length);
//         if (substr === needle) {
//             return i;
//         }
//     }
//     return -1;
// }

// export function strStrIndexOf(haystack: string, needle: string) {
//     return haystack.indexOf(needle);
// }
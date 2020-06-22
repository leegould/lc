/**
 * Find common characters
 * @param arr the array of strings
 * @returns the common characters in the arr
 * @description runtime O()
 */
export function commonChars(arr: string[]) {
    const map = new Map();

    for(let i = 0; i < arr.length;i++) {
        for(let j = 0; j < arr[i].length;j++) {
            const char = arr[i][j];
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                map.set(char, 1);
            }
        }
    }

    console.log('map', map);
    const out = [];

    for (let [key, value] of map) {
        const count = Math.floor(value / arr.length);
        for(let i = 0; i < count;i++) {
            out.push(key);
        }
    }

    return out;
}
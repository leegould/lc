/**
 * Group the people given the group size they belong to
 * @param groupSizes the list of group sizes
 * @returns array of the groups
 * @description runtime O(n) space O(n)
 */
export function groupThePeople(groupSizes: number[]): number[][] {
    const map = new Map<number, number[][]>();
    const out: number[][] = [];

    for(let i = 0; i < groupSizes.length;i++) {
        const groupSize = groupSizes[i];

        if (!map.has(groupSize)) {
            map.set(groupSize, [[]]);
        }

        const group = map.get(groupSize) as number[][];

        if (group[group.length - 1].length === groupSize) {
            group.push([i]);
        } else {
            group[group.length - 1].push(i);
        }
    }

    map.forEach((value) => {
        value.forEach((arr) => {
            out.push(arr)
        })
    });

    return out;
};

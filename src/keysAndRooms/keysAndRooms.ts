/**
 * Can visit all rooms
 * @param rooms the list of rooms
 * @returns true if you can visit all rooms, false otherwise
 * @description runtime O()
 */
export function canVisitAllRooms(rooms: number[][]) {
    const stack = [0];
    const seen = [0];

    while(stack.length > 0) {
        const key = stack.pop() as number;

        for(let i = 0; i < rooms[key].length;i++) {
            const akey = rooms[key][i];
            if (!seen.includes(akey)) {
                stack.push(akey);
                seen.push(akey);
                if (rooms.length === seen.length) {
                    return true;
                }
            }
        }
    }

    return rooms.length === seen.length;
}

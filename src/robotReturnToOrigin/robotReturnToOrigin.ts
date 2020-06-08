
/**
 * Figure out if a robot returns to its origin
 * @param moves the list of moves
 * @returns true if returns to origin, false otherwise
 * @description runtime O(n)
 */
export function judgeCircle(moves: string) {
    const movesArr = moves.split('');
    let vertical = 0;
    let horizontal = 0;
    for(let i = 0; i < movesArr.length;i++) {
        switch (movesArr[i]) {
            case "U":
                vertical += 1;
                break;
            case "D":
                vertical -= 1;
                break;
            case "L":
                horizontal += 1;
                break;
            case "R":
                horizontal -= 1;
                break;
        }
    }
    return vertical === 0 && horizontal === 0;
}
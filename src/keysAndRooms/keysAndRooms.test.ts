import { expect } from 'chai';
import { canVisitAllRooms } from './keysAndRooms';

describe('keysAndRooms', () => {
    it('runs as expected', () => {
        const input = [[1],[2],[3],[]];
        const expected = true;
        const result = canVisitAllRooms(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with false example', () => {
        const input = [[1,3],[3,0,1],[2],[0]];
        const expected = false;
        const result = canVisitAllRooms(input);
        expect(result).to.equal(expected);
    });
    it('runs as expected with example', () => {
        const input = [[2],[],[1]];
        const expected = true;
        const result = canVisitAllRooms(input);
        expect(result).to.equal(expected);
    });
});
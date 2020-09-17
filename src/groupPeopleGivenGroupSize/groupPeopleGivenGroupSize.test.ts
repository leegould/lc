import { expect } from 'chai';
import { groupThePeople } from './groupPeopleGivenGroupSize';

describe('Group the People Given the Group Size They Belong To', () => {
    it('runs as expected', () => {
        const input = [3,3,3,3,3,1,3];
        const result = groupThePeople(input);
        const expected = [[0,1,2], [3,4,6 ],[5]];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [2,1,3,3,3,2];
        const result = groupThePeople(input);
        const expected = [[0,5],[1],[2,3,4]];
        expect(result).to.deep.equal(expected);
    });
});

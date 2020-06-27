import { expect } from 'chai';
import { gameOfLife } from './gameOfLife';

describe('gameOfLife', () => {
    it('runs as expected', () => {
        const input = [
            [0,1,0],
            [0,0,1],
            [1,1,1],
            [0,0,0],
        ];

        const expected = [
            [0,0,0],
            [1,0,1],
            [0,1,1],
            [0,1,0],
          ];

        const result = gameOfLife(input);

        expect(result).to.deep.equal(expected);
    });
});

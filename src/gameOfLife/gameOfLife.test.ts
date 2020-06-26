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

        console.log('initial', input);
        console.log('expected', expected);
        console.log('result', result);
        expect(result).to.deep.equal(expected);
    });
});

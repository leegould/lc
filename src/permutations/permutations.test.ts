import { expect } from 'chai';
import { permute } from './permutations';

describe('permutations', () => {
    it('runs as expected', () => {
        const input = [1,2,3];

        const expected = [
            [ 1, 2, 3 ],
            [ 2, 1, 3 ],
            [ 2, 3, 1 ],
            [ 1, 3, 2 ],
            [ 3, 1, 2 ],
            [ 3, 2, 1 ]
        ];

        const result = permute(input);

        expect(result).to.deep.equal(expected);
    });

    it('runs as expected with single input', () => {
        const input = [1];

        const expected = [
            [1],
        ];

        const result = permute(input);

        expect(result).to.deep.equal(expected);
    });
    
    it('runs as expected with four inputs', () => {
        const input = [5,4,6,2];

        const expected = [
            [ 5, 4, 6, 2 ],
            [ 4, 5, 6, 2 ],
            [ 4, 6, 5, 2 ],
            [ 4, 6, 2, 5 ],
            [ 5, 6, 4, 2 ],
            [ 6, 5, 4, 2 ],
            [ 6, 4, 5, 2 ],
            [ 6, 4, 2, 5 ],
            [ 5, 6, 2, 4 ],
            [ 6, 5, 2, 4 ],
            [ 6, 2, 5, 4 ],
            [ 6, 2, 4, 5 ],
            [ 5, 4, 2, 6 ],
            [ 4, 5, 2, 6 ],
            [ 4, 2, 5, 6 ],
            [ 4, 2, 6, 5 ],
            [ 5, 2, 4, 6 ],
            [ 2, 5, 4, 6 ],
            [ 2, 4, 5, 6 ],
            [ 2, 4, 6, 5 ],
            [ 5, 2, 6, 4 ],
            [ 2, 5, 6, 4 ],
            [ 2, 6, 5, 4 ],
            [ 2, 6, 4, 5 ],
        ];

        const result = permute(input);

        expect(result).to.deep.equal(expected);
    });
});

import { expect } from 'chai';
import { stringPermutations } from './stringPermutations';

describe('stringPermutations', () => {
    it('runs as expected', () => {
        const str = 'cat';
        const result = stringPermutations(str);
        const expected = new Set(['cat', 'cta', 'tca', 'tac', 'atc', 'act']);
        expect(result.size).to.equal(expected.size);
    });
});

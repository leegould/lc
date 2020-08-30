import { expect } from 'chai';
import { uniqueMorseRepresentations } from './uniqueMorseCodeWords';

describe('uniqueMorseCodeWords', () => {
    it('runs as expected', () => {
        const input = ["gin", "zen", "gig", "msg"];
        const result = uniqueMorseRepresentations(input);
        const expected = 2;
        expect(result).to.equal(expected);
    });
});

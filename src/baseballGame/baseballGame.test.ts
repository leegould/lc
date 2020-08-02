import { expect } from 'chai';
import { calPoints } from './baseballGame';

describe('baseballGame', () => {
    it('runs as expected', () => {
        const input = ["5","2","C","D","+"];
        const result = calPoints(input);
        const expected = 30;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = ["5","-2","4","C","D","9","+","+"];
        const result = calPoints(input);
        const expected = 27;
        expect(result).to.equal(expected);
    });
});

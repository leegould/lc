import { expect } from 'chai';
import { judgeCircle } from './robotReturnToOrigin';

describe('Robot return to origin', () => {
    it('runs as expected', () => {
        const input = "UD";
        const expected = true;
        const result = judgeCircle(input);
        expect(result).to.equal(expected);
    });

    it('runs as expected when false', () => {
        const input = "LL";
        const expected = false;
        const result = judgeCircle(input);
        expect(result).to.equal(expected);
    });
});

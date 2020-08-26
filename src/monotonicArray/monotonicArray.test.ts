import { expect } from 'chai';
import { isMonotonic } from './monotonicArray';

describe('monotonicArray', () => {
    it('runs as expected', () => {
        const input = [1,2,2,3];
        const result = isMonotonic(input);
        expect(result).to.be.true;
    });
    it('runs as expected with second example', () => {
        const input = [6,5,4,4];
        const result = isMonotonic(input);
        expect(result).to.be.true;
    });
    it('runs as expected with third example', () => {
        const input = [1,3,2];
        const result = isMonotonic(input);
        expect(result).to.be.false;
    });
    it('runs as expected with fourth example', () => {
        const input = [1,2,4,5];
        const result = isMonotonic(input);
        expect(result).to.be.true;
    });
    it('runs as expected with fifth example', () => {
        const input = [1,1,1];
        const result = isMonotonic(input);
        expect(result).to.be.true;
    });
});

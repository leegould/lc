import { expect } from 'chai';
import { xorOperation } from './xorOperationArray';

describe('XOR Operation in an Array', () => {
    it('runs as expected', () => {
        const n = 5;
        const start = 0;
        const result = xorOperation(n, start);
        const expected = 8;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const n = 4;
        const start = 3;
        const result = xorOperation(n, start);
        const expected = 8;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const n = 1;
        const start = 7;
        const result = xorOperation(n, start);
        const expected = 7;
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const n = 10;
        const start = 5;
        const result = xorOperation(n, start);
        const expected = 2;
        expect(result).to.equal(expected);
    });
});

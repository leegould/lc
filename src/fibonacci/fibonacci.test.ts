import { expect } from 'chai';
import { fib } from './fibonacci';

describe('Fibonacci', () => {
    it('runs as expected', () => {
        const input = 2;
        const result = fib(input);
        expect(result).to.equal(1);
    });
    it('runs as expected with 0', () => {
        const input = 0;
        const result = fib(input);
        expect(result).to.equal(0);
    });
    it('runs as expected with 1', () => {
        const input = 1;
        const result = fib(input);
        expect(result).to.equal(1);
    });
    it('runs as expected with 3', () => {
        const input = 3;
        const result = fib(input);
        expect(result).to.equal(2);
    });
    it('runs as expected with 4', () => {
        const input = 4;
        const result = fib(input);
        expect(result).to.equal(3);
    });
});

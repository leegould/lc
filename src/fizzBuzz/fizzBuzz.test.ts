import { expect } from 'chai';
import { fizzBuzz } from './fizzBuzz';

describe('fizzBuzz', () => {
    it('runs as expected', () => {
        const n = 15;
        const result = fizzBuzz(n);
        const expected = [
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz"
        ];
        expect(result).to.deep.equal(expected);
    });
});

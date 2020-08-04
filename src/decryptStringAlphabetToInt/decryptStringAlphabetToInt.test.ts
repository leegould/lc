import { expect } from 'chai';
import { freqAlphabets } from './decryptStringAlphabetToInt';

describe('decryptStringFromAlphabetIntMap', () => {
    it('runs as expected', () => {
        const input = "10#11#12";
        const result = freqAlphabets(input);
        const expected = "jkab";
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = "1326#";
        const result = freqAlphabets(input);
        const expected = "acz";
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with third example', () => {
        const input = "25#";
        const result = freqAlphabets(input);
        const expected = "y";
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const input = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#";
        const result = freqAlphabets(input);
        const expected = "abcdefghijklmnopqrstuvwxyz";
        expect(result).to.deep.equal(expected);
    });
});

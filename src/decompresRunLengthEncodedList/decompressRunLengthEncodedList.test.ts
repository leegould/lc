import { expect } from 'chai';
import { decompressRLElist } from './decompressRunLengthEncodedList';

describe('Decompress Run-Length Encoded List', () => {
    it('runs as expected', () => {
        const input = [1,2,3,4];
        const result = decompressRLElist(input);
        const expected = [2,4,4,4];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with second example', () => {
        const input = [1,1,2,3];
        const result = decompressRLElist(input);
        const expected = [1,3,3];
        expect(result).to.deep.equal(expected);
    });
});

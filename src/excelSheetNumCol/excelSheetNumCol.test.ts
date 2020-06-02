
import { expect } from 'chai';
import { convertToTitle } from './excelSheetNumCol';

describe('excelSheetColNum', () => {
    it('runs as expected', () => {
        const input = 1;
        const result = convertToTitle(input);
        const expected = "A";
        expect(result).to.equal(expected);
    });
    it('runs as expected with multiple letters', () => {
        const input = 28;
        const result = convertToTitle(input);
        const expected = "AB";
        expect(result).to.equal(expected);
    });
    it('runs as expected with large number', () => {
        const input = 701;
        const result = convertToTitle(input);
        const expected = "ZY";
        expect(result).to.equal(expected);
    });
});

import { expect } from 'chai';
import { titleToNumber } from './excelSheetColNum';

describe('excelSheetColNum', () => {
    it('runs as expected', () => {
        const input = "A";
        const result = titleToNumber(input);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with empty', () => {
        const input = "";
        const result = titleToNumber(input);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with multiple columns', () => {
        const input = "AB";
        const result = titleToNumber(input);
        const expected = 28;
        expect(result).to.equal(expected);
    });

    it('runs as expected with larger value', () => {
        const input = "ZY";
        const result = titleToNumber(input);
        const expected = 701;
        expect(result).to.equal(expected);
    });
});
import { expect } from 'chai';
import { buildArray } from './targetArrayWithStack';

describe('Target Array with Stack Operations', () => {
    it('runs as expected', () => {
        const target = [1,3];
        const n = 3;
        const result = buildArray(target, n);
        const expected = ["Push","Push","Pop","Push"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with all values', () => {
        const target = [1,2,3];
        const n = 3;
        const result = buildArray(target, n);
        const expected = ["Push","Push","Push"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with early complete', () => {
        const target = [1,2];
        const n = 4;
        const result = buildArray(target, n);
        const expected = ["Push","Push"];
        expect(result).to.deep.equal(expected);
    });
    it('runs as expected with late complete', () => {
        const target = [2,3,4];
        const n = 4;
        const result = buildArray(target, n);
        const expected = ["Push","Pop","Push","Push","Push"];
        expect(result).to.deep.equal(expected);
    });
});
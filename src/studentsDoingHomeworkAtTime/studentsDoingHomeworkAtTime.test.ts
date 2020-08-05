import { expect } from 'chai';
import { busyStudent } from './studentsDoingHomeworkAtTime';

describe('studentsDoingHomeworkAtTime', () => {
    it('runs as expected', () => {
        const starts = [1,2,3];
        const ends = [3,2,7];
        const query = 4;
        const result = busyStudent(starts, ends, query);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const starts = [4];
        const ends = [4];
        const query = 4;
        const result = busyStudent(starts, ends, query);
        const expected = 1;
        expect(result).to.equal(expected);
    });
    it('runs as expected with third example', () => {
        const starts = [4];
        const ends = [4];
        const query = 5;
        const result = busyStudent(starts, ends, query);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with fourth example', () => {
        const starts = [1,1,1,1];
        const ends = [1,3,2,4];
        const query = 7;
        const result = busyStudent(starts, ends, query);
        const expected = 0;
        expect(result).to.equal(expected);
    });
    it('runs as expected with fifth example', () => {
        const starts = [9,8,7,6,5,4,3,2,1];
        const ends = [10,10,10,10,10,10,10,10,10];
        const query = 5;
        const result = busyStudent(starts, ends, query);
        const expected = 5;
        expect(result).to.equal(expected);
    });
});

import { expect } from 'chai';
import { GetImportance } from './employeeImportance';

describe('elementAppearingMoreThan', () => {
    it('runs as expected', () => {
        const employees = [
            { id: 1, importance: 5, subordinates: [2, 3] },
            { id: 2, importance: 3, subordinates: [] },
            { id: 3, importance: 3, subordinates: [] },
        ]
        const id = 1;
        const result = GetImportance(employees, id);
        const expected = 11;
        expect(result).to.equal(expected);
    });
    it('runs as expected with second example', () => {
        const employees = [
            { id: 1, importance: 2, subordinates: [2] },
            { id: 2, importance: 3, subordinates: [] },
        ]
        const id = 2;
        const result = GetImportance(employees, id);
        const expected = 3;
        expect(result).to.equal(expected);
    });
});

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

export interface Employee {
    id: number;
    importance: number;
    subordinates: number[];
}

export function GetImportance(employees: Employee[], id: number): number {
    let sum = 0;
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        sum += employee.importance;
        for(let i = 0; i < employee.subordinates.length;i++) {
            sum += GetImportance(employees, employee.subordinates[i]);
        }
    }

    return sum;
};

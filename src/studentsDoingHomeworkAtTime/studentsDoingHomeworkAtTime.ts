/**
 * Students doing homework at specific time
 * @param startTime the list of start times
 * @param endTime the list of end times
 * @param queryTime the query time
 * @description runtime O(n) space O(1)
 */
export function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    return startTime.filter((val, idx) => val <= queryTime && endTime[idx] >= queryTime).length;
};

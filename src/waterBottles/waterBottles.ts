/** 
 * Water Bottles
 * @param numBottles the number of bottles
 * @param numExchange the number you can exchange
 * @returns the number of total drinkables
 * @description runtime O() space O()
 */
export function numWaterBottles(numBottles: number, numExchange: number): number {
    let drunk = numBottles;
    let empties = numBottles;

    while (empties >= numExchange) {
        const newDrunk = Math.floor(empties / numExchange);
        drunk += newDrunk;
        empties = newDrunk + empties % numExchange;
    }

    return drunk;
};

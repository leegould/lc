/**
 * How many coins are needed to make the target
 * @param coins the denominations of coins
 * @param amount the target amount
 * @returns the number of coins needed or -1
 * @description runtime O()
 */
export function coinChange(coins: number[], amount: number): number {
    coins = coins.sort((a, b) => a - b);
    const countArray = new Array(amount+1).fill(amount+1);
    countArray[0] = 0;
    
    for(let c = 0;c <= amount;c++) {
        for(let i = 0;i < coins.length;i++) {
            if(c >= coins[i]) {
                countArray[c] =  Math.min(countArray[c], countArray[c - coins[i]] + 1);
            } else {
                break;
            }
        }
    }

    return countArray[amount] <= amount ? countArray[amount] : -1;
};
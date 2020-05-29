
/** Max Profit
 * @param prices the list of prices
 * @returns the max profit
 * @description runtime O(n²)
 * @description runspace O(1)
 */
export function maxProfitBrute(prices: number[]) {
    function calc(startIndex: number) {
        let profit = 0;
        for(let i = startIndex; i < prices.length;i++) {
            let maxProfit = 0;
            for(let j = i + 1;j < prices.length;j++) {
                if (prices[i] < prices[j]) {
                    const totalProfit = calc(j + 1) + prices[j] - prices[i];
                    if (totalProfit > maxProfit) {
                        maxProfit = totalProfit;
                    }    
                }
            }
            if (maxProfit > profit) {
                profit = maxProfit;
            }
        }
    
        return profit;
    }
    return calc(0);
}

/** Max Profit
 * @param prices the list of prices
 * @returns the max profit
 * @description runtime O(n)
 * @description runspace O(1)
 */
export function maxProfit(prices: number[]) {
    return prices.reduce((acc, cur, idx) =>
        idx > 0 && cur > prices[idx - 1] ? acc + cur - prices[idx - 1] : acc
    , 0);

    // let profit = 0;
    // for(let i = 1; i < prices.length;i++) {
    //     if (prices[i] > prices[i - 1]) {
    //         profit += prices[i] - prices[i - 1];
    //     }
    // }
    // return profit;
}
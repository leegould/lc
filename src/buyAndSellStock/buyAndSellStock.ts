/**
 * Max Profit - brute force
 * @param prices list of prices
 * @returns the maximum profit
 * @note runtime: O(n²)
 */
export function maxProfitBrute(prices: number[]) {
    let profit = 0;
    for(let i = 0; i < prices.length - 1;i++) {
        const buy = prices[i];
        for(let j = i + 1;j < prices.length;j++) {
            const sell = prices[j];
            if ((sell - buy) > profit) {
                profit = sell - buy;
            }
        }
    }
    return profit;
}

/**
 * Max Profit - single pass
 * @param prices list of prices
 * @returns the maximum profit
 * @note runtime: O(n)
 */
export function maxProfit(prices: number[]) {
    let min = Number.MAX_VALUE;
    let profit = 0;
    for(let i = 0; i < prices.length;i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }

    }
    return profit;
}
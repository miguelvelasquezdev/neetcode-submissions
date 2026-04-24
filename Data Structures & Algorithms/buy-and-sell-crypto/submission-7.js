class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0

        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                console.log(i, 'i', j, 'j')

                const firstPrice = prices[i]
                const secondPrice = prices[j]
                const nextProfix = secondPrice - firstPrice
                if (nextProfix > profit) {
                    profit = nextProfix
                }
            }
        }

        return profit
    }
}

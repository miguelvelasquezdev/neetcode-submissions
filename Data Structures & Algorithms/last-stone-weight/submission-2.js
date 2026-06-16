class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b)
            if (stones[stones.length - 2] === stones[stones.length - 1]) {
                stones.pop()
                stones.pop()
            } else if (stones[stones.length - 2] > stones[stones.length - 1]) {
                const res = stones[stones.length - 2] - stones[stones.length - 1]
                stones.pop()
                stones.pop()
                stones.push(res)
            } else {
                const res = stones[stones.length - 1] - stones[stones.length - 2]
                stones.pop()
                stones.pop()
                stones.push(res)
            }
        }

        if (stones.length) return stones[0]
        return 0
    }
}

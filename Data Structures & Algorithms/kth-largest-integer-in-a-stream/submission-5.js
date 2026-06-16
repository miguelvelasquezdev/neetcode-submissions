class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.nums = nums
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (typeof val !== 'number') return null

        this.nums.push(val)
        const numsSorted = [...this.nums].sort((a, b) => a - b)

        return numsSorted[numsSorted.length - this.k]
    }
}

/**
 * [1, 2h, 3, 3] "2"
 * [1, 2, 3h, 3, 3] 3
 * [1, 2, 3, 3h, 3, 5] 3
 * [1, 2, 3, 3, 3h, 5, 6] 3
 * [1, 2, 3, 3, 3, 5h, 6, 7] 5
 * [1, 2, 3, 3, 3, 5, 6h, 7, 8] 6
 */

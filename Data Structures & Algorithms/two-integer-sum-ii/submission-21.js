class Solution {
    recursiveSum(numbers, l, r, target) {
        const sum = numbers[l] + numbers[r]

        if (sum === target) {
            return [l + 1, r + 1]
        }

        if (sum > target) {
            return this.recursiveSum(numbers, l, r - 1, target)
        } else {
            return this.recursiveSum(numbers, l + 1, r, target)
        }
    }

    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1

        return this.recursiveSum(numbers, l, r, target)
    }

    
}

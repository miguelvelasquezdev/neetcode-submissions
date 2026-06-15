class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for (let i = 0; i < nums.length; i++) {
            const v = nums[i]
            const res = target - v

            if (typeof map[res] === 'number') {
                return [map[res], i]
            }

            map[v] = i
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const newStones = [...stones]
        while (newStones.length > 1) {
            newStones.sort((a, b) => a - b)
            console.log(newStones, 'newStones')
            if (newStones[newStones.length - 2] === newStones[newStones.length - 1]) {
                newStones.pop()
                newStones.pop()
            } else if (newStones[newStones.length - 2] > newStones[newStones.length - 1]) {
                const res = newStones[newStones.length - 2] - newStones[newStones.length - 1]
                newStones.pop()
                newStones.pop()
                newStones.push(res)
            } else {
                const res = newStones[newStones.length - 1] - newStones[newStones.length - 2]
                newStones.pop()
                newStones.pop()
                newStones.push(res)
            }
        }

        if (newStones.length) return newStones[0]
        return 0
    }
}

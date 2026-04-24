class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for (const c of s) {
            console.log('c', c)
            if (Boolean(closeToOpen[c])) {
                if (Boolean(stack.length) && stack[stack.length -1] === closeToOpen[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        if (!stack.length) return true

        return false
    }
}

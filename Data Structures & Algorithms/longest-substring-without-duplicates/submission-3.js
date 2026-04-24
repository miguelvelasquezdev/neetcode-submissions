class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        
        for (let i = 0; i < s.length; i++) {
            let substring = new Set(s[i])
            let finished = false

            if (substring.size > longest) {
                longest = substring.size
            }

            for (let j = i +1; !finished && j < s.length; j++) {
                const v = s[j]
                if (substring.has(v)) {
                    finished = true
                } else {
                    substring.add(v)
                    if (substring.size > longest) {
                        longest = substring.size
                    }
                }
            }
        }

        return longest
    }
}

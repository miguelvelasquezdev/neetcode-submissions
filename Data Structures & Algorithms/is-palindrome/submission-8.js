class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = []

        for (let i = 0; i < s.length; i++) {
            const c = s[i].toLowerCase()
            if (this.isAlphanumeric(c)) {
                cleaned.push(c)
            }
        }

        let l = 0
        let r = cleaned.length - 1

        console.log(cleaned, 'cleaned')

        while (l < r) {
            if (cleaned[l] !== cleaned[r]) return false

            l++
            r--
        }

        return true

    }

    isAlphanumeric(c) {
        return /[a-z0-9]/i.test(c)
    }
}

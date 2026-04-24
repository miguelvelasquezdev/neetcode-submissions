class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const sMap = new Map()
        const tMap = new Map()

        for (let i = 0; i < s.length; i++) {
            const sValue = sMap.get(s[i]) ?? 0
            const tValue = tMap.get(t[i]) ?? 0
            sMap.set(s[i], sValue + 1)
            tMap.set(t[i], tValue + 1)
        }

        for (let key of sMap.keys()) {
            const sValue = sMap.get(key)
            const tValue = tMap.get(key)
            console.log(key, sValue, tValue, 'testtt')
            if (tValue !== sValue) return false
        }

        return true
    }
}

class TrieNode {

    constructor() {
        this.children = {}
        this.isEnd = false
    }
}

class PrefixTree {
    

    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root

        for (let c of word) {
            const v = c.toLowerCase()
            if (!curr.children[v]) {
                curr.children[v] = new TrieNode()
            }

            curr = curr.children[v]
        }
        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root

        for (let c of word) {
            const v = c.toLowerCase()
            if (!curr.children[v]) return false

            curr = curr.children[v]
        }

        return curr.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root

        for (let c of prefix) {
            const v = c.toLowerCase()
            if (!curr.children[v]) return false

            curr = curr.children[v]
        }

        return true
    }
}

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
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode()
            }

            curr = curr.children[c]
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
            if (!curr.children[c]) return false

            curr = curr.children[c]
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
            if (!curr.children[c]) return false

            curr = curr.children[c]
        }

        return true
    }
}

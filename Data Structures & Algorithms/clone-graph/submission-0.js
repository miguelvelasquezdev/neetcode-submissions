/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) return null
        const visited = new Map()

        explore(node, visited)

        return visited.get(node.val)
    }
}

function explore(node, visited) {
    if (node === null) return null
    const newNode = new Node(node.val)
    visited.set(node.val, newNode)

    for (const neighbor of node.neighbors) {
        if (visited.has(neighbor.val)) {
            newNode.neighbors.push(visited.get(neighbor.val))
        } else {
            const newNeighbor = explore(neighbor, visited)
            newNode.neighbors.push(newNeighbor)
        }
    }

    return newNode
}

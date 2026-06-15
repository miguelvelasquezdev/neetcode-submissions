class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set()
        let count = 0

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (explore(grid, r, c, visited)) {
                    count++
                }
            }
        }

        return count
    }
}

function explore(grid, row, col, visited) {
    const rInbound = 0 <= row && row < grid.length
    const cInbound = 0 <= col && col < grid[0].length

    if (!rInbound || !cInbound) return false
    if (grid[row][col] === '0') return false

    const pos = row + ',' + col

    if (visited.has(pos)) return false
    visited.add(pos)

    explore(grid, row - 1, col, visited)
    explore(grid, row + 1, col, visited)
    explore(grid, row, col - 1, visited)
    explore(grid, row, col + 1, visited)

    return true
}

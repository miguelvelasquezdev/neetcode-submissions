class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set()
        let size = 0

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                const res = explore(grid, r, c, visited)
                if (res > size) {
                    size = res
                }
            }
        }

        return size
    }
}

function explore(grid, row, col, visited) {
    const rInbounds = 0 <= row && row < grid.length
    const cInbounds = 0 <= col && col < grid[0].length

    if (!rInbounds || !cInbounds) return 0
    if (grid[row][col] === 0) return 0

    const pos = row + ',' + col
    if (visited.has(pos)) return 0
    visited.add(pos)

    let size = 1
    size += explore(grid, row + 1, col, visited)
    size += explore(grid, row - 1, col, visited)
    size += explore(grid, row, col + 1, visited)
    size += explore(grid, row, col - 1, visited)

    return size
}

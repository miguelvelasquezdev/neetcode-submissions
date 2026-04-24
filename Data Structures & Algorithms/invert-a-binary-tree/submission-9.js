

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

const invert = (node) => {
    if (!node) return
    console.log(node, 'node first')
    const lTmp = node.left

    node.left = node.right
    node.right = lTmp
    invert(node.left)
    invert(node.right)
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        invert(root)

        return root
    }
}

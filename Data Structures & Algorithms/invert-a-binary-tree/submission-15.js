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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root
        const stack = [root]
        while (stack.length) {
            const curr = stack.pop()

            const lTmp = curr.left

            curr.left = curr.right
            curr.right = lTmp
            if (curr.left) stack.push(curr.left)
            if (curr.right) stack.push(curr.right)
        }

        return root
    }
}

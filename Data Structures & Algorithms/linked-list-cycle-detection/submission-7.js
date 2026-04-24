/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const nodes = new Set()
        let curr = head

        if (!head) {
            return false
        }

        if (!head.next) {
            return false
        }

        do {
            if (!curr.next) {
                break;
            }
            if (nodes.has(curr.next)) {
                return true

            }
            nodes.add(curr)
            
            curr = curr.next
        } while (curr !== null)

        return false
    }
}

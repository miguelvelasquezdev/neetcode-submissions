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
     * @return {ListNode}
     */
    // [-> 0, 1, 2, 3, null]
    // -> [2, -> 1, 0, 3, null]
    // -> [2, 3, -> 1, 0, null]
    // -> [2, 3, 1, -> 0, null]

    // [0 -> 1 -> 2 -> 3 -> null]
    // [0 -> null, 1 -> 2 -> 3 -> null]
    // [1 -> 0 -> null, 2 -> 3 -> null]
    // [2 -> 1 -> 0 -> null, 3 -> null]
    // [3 -> 2 -> 1 -> 0 -> null]

    // [0->null->2->3->null]
    reverseList(head) {
        let prev = null
        let curr = head

        console.log(head, 'head???')

        if (!curr) {
            return curr
        }

        do {
            console.log(curr, 'newww')
            const nextTmp = curr.next
            curr.next = prev
            console.log('===', curr, '===', prev)
            prev = curr
            console.log(prev, 'prev', nextTmp, 'nextTmp')
            curr = nextTmp

        } while (curr !== null)
        console.log(prev, 'final')

        return prev
    }
}

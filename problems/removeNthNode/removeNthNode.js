"use strict";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function removeNthFromEnd(head, n) {
    let count = 0;
    let tail = head;
    // determine length of linked list
    while (tail) {
        count += 1;
        tail = tail.next;
    }
    tail = head;
    if (count === n) {
        return tail.next;
    }
    while (tail.next) {
        // check if next node is target node
        if (count - 1 === n) {
            tail.next = tail.next.next;
        }
        else {
            tail = tail.next;
        }
        count -= 1;
    }
    return head;
}

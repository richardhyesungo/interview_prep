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
function hasCycle(head) {
    let slowPointer = head;
    let fastPointer = head ? head.next : null;
    // what conditions?
    // if fastPointer is null, we've reached end of list
    // therefore there's no cycle
    // if slowPointer === fasterPointer, there's a cycle
    //
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer ? slowPointer.next : null; // will never be null... fastPointer would get to null first
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer)
            return true;
    }
    return false;
    // return hasCycle;
}
/*

use two pointers: slow and fast
one goes n speed, other goes 2n speed
if fast gets to a null value, return false



*/

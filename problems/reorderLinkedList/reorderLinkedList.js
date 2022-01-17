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
/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    // find middle of list
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse second half of list
    let secondHalfLeftToRight = slow.next;
    let secondHalfPrev = null;
    slow.next = null;
    while (secondHalfLeftToRight) {
        let tempNext = secondHalfLeftToRight.next;
        secondHalfLeftToRight.next = secondHalfPrev;
        secondHalfPrev = secondHalfLeftToRight;
        secondHalfLeftToRight = tempNext;
    }
    // merge lists
    let left = head;
    let right = secondHalfPrev;
    while (right) {
        let temp1 = left.next;
        let temp2 = right.next;
        left.next = right;
        right.next = temp1;
        left = temp1;
        right = temp2;
    }
}

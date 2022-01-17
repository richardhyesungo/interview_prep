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
function reorderList(head: ListNode | null): void {
  // find middle of list
  let slow: ListNode | null = head;
  let fast: ListNode | null = head!.next;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // reverse second half of list
  let secondHalfLeftToRight: ListNode | null = slow!.next;
  let secondHalfPrev: ListNode | null = null;
  slow!.next = null;

  while (secondHalfLeftToRight) {
    let tempNext: ListNode | null = secondHalfLeftToRight.next;
    secondHalfLeftToRight.next = secondHalfPrev;
    secondHalfPrev = secondHalfLeftToRight;
    secondHalfLeftToRight = tempNext;
  }

  // merge lists
  let left: ListNode | null = head;
  let right: ListNode | null = secondHalfPrev;
  while (right) {
    let temp1: ListNode | null = left!.next;
    let temp2: ListNode | null = right!.next;
    left!.next = right;
    right!.next = temp1;
    left = temp1;
    right = temp2;
  }
}

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

function hasCycle(head: ListNode | null): boolean {
  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head ? head.next : null;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer ? slowPointer.next : null;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) return true;
  }

  return false;
}

/*

use two pointers: slow and fast
one goes n speed, other goes 2n speed
if fast gets to a null value, return false



*/

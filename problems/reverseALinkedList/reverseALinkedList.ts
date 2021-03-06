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

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function reverseList(head: ListNode | null) {
  let currentNode = head;
  let prevNode = null; // def null

  while (currentNode) {
    // iteration tracking
    let nextNode = currentNode.next;

    // property reassignment
    currentNode.next = prevNode;

    // next node property
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
}

/*

  inputs: head of a singly linked list
  outputs: reversed linked list. What form is this...?
  constraints: # of nodes between 0 and 5,000, vals btwn -5,000 and 5,000
  edge cases: ???

  does a reversed list mean that all nodes are pointed in reverse? -> yes
  could do iteratively and recursively


*/

module.exports = reverseList;

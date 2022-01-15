class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let mergedHead: ListNode = new ListNode();
  let mergedTail: ListNode = mergedHead;

  // iterate through - while both are not at the end
  while (list1 && list2) {
    // compare node values
    if (list1 && list1.val <= list2.val) {
      mergedHead.next = list1;
      list1 = list1.next;
    } else {
      mergedHead.next = list2;
      list2 = list2.next;
    }
    mergedHead = mergedHead.next;
  }

  mergedHead.next = list1 || list2;

  // if (list1) {
  //   mergedHead.next = list1
  // } else {
  //   mergedHead.next = list2
  // }

  return mergedTail.next;
}

/*

inputs: two heads of two sorted linked lists
outputs: merge and return the head of the merged linked list
constraints:
edge cases:

between 0 and 50 nodes
value between -100 and 100
sorted in non-decreasing order

iterate through both lists until reach end of both O(n), single while loop?
two pointers at current node
compare values. if one is less than or equal to the other, add it to the joined
increment the pointer of the list that was added in



*/

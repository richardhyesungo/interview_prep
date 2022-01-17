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

type nodeType = ListNode | null;
const mergeLists = (leftList: nodeType, rightList: nodeType): nodeType => {
  let dummyNode: nodeType = new ListNode();
  let tail: nodeType = dummyNode;

  while (leftList && rightList) {
    if (leftList.val <= rightList.val) {
      tail.next = leftList;
      leftList = leftList.next;
    } else {
      tail.next = rightList;
      rightList = rightList.next;
    }
    tail = tail.next;
  }

  if (leftList) {
    tail.next = leftList;
  } else if (rightList) {
    tail.next = rightList;
  }

  return dummyNode.next;
};

function mergeKLists(lists: Array<nodeType>): nodeType {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let mergedLists: Array<nodeType> = [];
    for (let i: number = 0; i < lists.length; i += 2) {
      let left: ListNode | null = lists[i];
      let right: ListNode | null = lists[i + 1] ? lists[i + 1] : null;

      mergedLists.push(mergeLists(left, right));
    }

    lists = mergedLists;
  }
  return lists[0];
}

/*
merge two lists at a time
until only one list remains

merge two sorted lists
dummyNode
tail = dummyNode
while both linked lists pointers are not null
check which is lower, add to tail
move node that was added
add rest of linked list to the new list

return dummyNode.next

*/

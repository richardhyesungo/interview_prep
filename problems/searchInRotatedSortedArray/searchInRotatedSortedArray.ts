function shiftedArrSearch(shiftArr: number[], num: number) {
  // your code goes here
  let left = 0;
  let right = shiftArr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (num === shiftArr[mid]) return mid;

    // left sorted portion
    if (shiftArr[left] <= shiftArr[mid]) {
      if (num > shiftArr[mid] || num < shiftArr[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (num < shiftArr[mid] || num > shiftArr[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

/*

wants to find the index of the number input
it's probably expecting that we're going to do this in O(log n) time
given that it would be easy to just iterate over the array in O(n)

input: [3, 4, 5, 1, 2], 2
output: 4

binary search
if odd length
[3, 4, 5], [1, 2]

if even length
input: [3, 4, 5, 6, 1, 2], 2
output: 5
[3, 4, 5], [6, 1, 2]

if starting element is higher than the last element, it's not sorted
else it is sorted

if the target element is between the first and last elements of the array
then continue to binary search on the appropriate half

[6, 1, 2] => [6, 1], [2]
how would you know which one to choose?

if the array is length one or two, would you just choose one?

if the first is less than the right,
  then check the target is between those two numbers
  if not, check the other half
else
  check


check if sorted

modified binary search
  does it even matter if it's sorted? Yes, could check if number in there
  if

  if not sorted

  while loop binary search
      midpoint
      lefthalf
      right half

      if midpoint is target, return midpoint index

      if left half sorted
          if target num between start and last
              reassign lefthalf
              reassign righthalf
          else
              reassign left half
              reassign right half
      else
          if target num between start and last
              reassign lefthalf
              reassign righthalf
          else
              reassign left half
              reassign right half

  return -1
      target = 2
      [4, 5, 6, 1, 2, 3]
      left = 0
      right = 5
      mid = 5 / 2 = 2
      if target > 6 or target < 4






*/

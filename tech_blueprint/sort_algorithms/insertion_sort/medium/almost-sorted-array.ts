/**
 * found on pramp practice interview
 * https://leetcode.com/discuss/interview-question/1177758/facebook-onsite-sort-array
 */

// in the pseudocode they give as an example, they don't utilize k at all.
// time is O(n * k), not for large values of k. Best if k < 12
const insertionSort = (arr: number[], k: number) => {
  // [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
  //

  for (let i = 1; i < arr.length; i++) {
    let leftIndex = i - 1; // j = 1 - 1 = 0 | 1
    let leftNum = arr[leftIndex];

    // hold current num in temp variable
    let currentNum = arr[i]; // arr[1] = 4 | 5

    // while in bounds and also while left number is greater than right
    // reassign right value, so if [...leftLeftNum=6, leftNum=7, currentNum=5...] => [...leftLeftNum=5, leftNum=6, leftNum=7...]
    // next iteration is
    // we're moving the right number to its appropriate place
    while (leftIndex >= 0 && leftNum > currentNum) {
      // shift the left number to the right
      arr[leftIndex + 1] = leftNum;

      // move left pointer by one
      leftIndex--;

      // get the current left element of the right number
      leftNum = arr[leftIndex];

      /*
            while loop
            [5, 4, 3, 2, 1], leftIndex=0, currentNum=4, leftNum=5 => leftIndex=-1, [5, 5, 3, 2, 1] => [4, 5, 3, 2, 1]
            [4, 5, 3, 2, 1], leftIndex=1, currentNum=3, leftNum=5 => leftIndex=0, [4, 5, 5, 2, 1] => [3, 4, 5, 2, 1]

            it's sort of like bubble sort the way that it swaps elements.
            takes the current element and goes backwards
          */
    }

    // re-assign value if left index moved
    arr[leftIndex + 1] = currentNum;
  }

  return arr;
};

/*
function insertionSort(arr):
    for i from 1 to arr.length-1:
        x = arr[i]
        j = i-1

        while (j >= 0 AND arr[j] > x):
            arr[j+1] = arr[j]
            j--
        arr[j+1] = x

    return arr


*/

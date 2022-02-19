// const insertionSortPractice = (array: number[]) => {
//   for (let outer = 1; outer < array.length; outer++) {
//     for (let inner = 0; inner < outer; inner++) {
//       console.log(array.join(" "));
//       if (array[outer] < array[inner]) {
//         const [element] = array.splice(outer, 1);
//         array.splice(inner, 0, element);
//       }
//     }
//   }
//   console.log(array.join(" "));
//   return array;
// };
// const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
// insertionSortPractice(numbers);

const insertionSortPractice = (array: number[]) => {
  // we start at index 1 because we know the first element
  // is already sorted
  for (let i = 1; i < array.length; i++) {
    // initialize left and right indices and elements
    let rightIdx = i;
    let right = array[rightIdx];

    let leftIdx = rightIdx - 1;
    let left = array[leftIdx];

    // if not at the beginning and left is greater than right
    while (leftIdx >= 0 && left > right) {
      // move the element to the left by
      // swapping the left and right elements
      swap(array, leftIdx, rightIdx);
      // move pointers to the left, so left
      // and right elements are repositioned
      leftIdx--;
      rightIdx--;
      left = array[leftIdx];
      right = array[rightIdx];
    }
  }
  return array;
};
// @ts-ignore
const swap = (array: number[], left: number, right: number) => {
  let temp = array[right];
  array[right] = array[left];
  array[left] = temp;
};

/*

iterate from left to right
  current element is 0 index (left)
  compare first and second elements
  if left greater than right, new current element is the right element (1 index)
  move right element to the left
  check to see if there's any elements to the left to compare to
  if not, end loop

  next element to change to current element is the element after the 1 index

  [5, 4, 3, 2, 1]
  currentPlace = array[1]
  left = array[0] = 5
  currentElement = array[1] = 4
  left > currentElement?
  swap

*/

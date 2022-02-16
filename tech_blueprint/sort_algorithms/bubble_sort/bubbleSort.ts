// export const bubbleSort = (arr: number[]) => {
//   return [1, 2, 3, 4];
// };

const bubbleSort = (array: number[]) => {
  let swapped = true;

  while (swapped) {
    swapped = false;

    // iterates through the array and looks to see if the current element is greater than the next
    // it will swap the two, then go back to the beginning of the array
    array.forEach((currentElement, i) => {
      let nextElement = array[i + 1];

      if (currentElement > nextElement) {
        // swap
        const temp = currentElement;
        array[i] = array[i + 1];
        array[i + 1] = temp;

        // loop again
        swapped = true;
      }
    });
  }
  console.log("array", array);
  return array;
};

// console.assert(bubbleSort([5, 4, 3, 2, 1]) === [1, 2, 3, 4, 5]);
